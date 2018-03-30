# Lesson 14 - Example Project with NodeJS, Express, and MongoDB (Part Three)

## Routing

Last Lesson we talked about our routes, let's relist them here as a re-fresher.
* **`GET` request on `/`** - User wants to load index page.
* **`POST` request on `/`** - User has submitted post form with a title and message.
* **`GET` request on `/editPost`** - User wants to get an edit form for a particular post.
* **`POST` request on `/editPost`** - User wants to submit an update to a particular post with an updated title and/or message.
* **`POST` request on `/deletePOST`** - User wants to delete a particular post.

## `GET` request on `/`

With this request, we know the user wants the entire index page loaded, with a header, new post form, and all previously created posts. In order to do this we need to go to our routing module *routes/index.js*, and add a `.get()` router middleware.

> **Mini Challenge!**
  > * Import 'Post' from our *post_model.js*
  > * Create a blank `.get()` route in *routes.index.js*

Now inside of that route, we need to get a collection of all the currently stored posts to render to the user. So inside of the route function, we will use `Post.find()` to do this.
```
  Post.find().exec().then((all_posts) => {
    res.render('index', {posts: all_posts})
  }).catch(() => {
    res.render('index', {error: "There was an error loading posts from the database."})
  });
```

Since we are rendering the index page and sending the posts to it, let's go there and render all the posts on the page.

First, since we are possibly rendering errors to the page, lets do that first at the top right under the jumbotron.
```
if error
  h3.text-danger= error
```

In *index.pug*, instead of dummy posts, we want to loop through each post in the posts array and use it's title and message to display the post. We can reduce all those dummy posts down to one loop.
```
for post in posts
  .row.mt-3
    .col-11
      .card
        .card-header
          h5.card-title= post.title
        .card-body
          p.card-text= post.message
    .col-1
      form(action='/editPost').mt-2
        input(type='hidden' name='post_id' value=post._id)
        button.btn.btn-outline-primary(type='submit') Edit
      form(action='/' method='DELETE').mt-3
        input(type='hidden' name='post_id' value=post._id)
        button.btn.btn-outline-danger(type='submit') Delete
```

When we load up the page, there are now posts, we need to be able to create some. So let's build our next route to do just that.

## `POST` request on `/`

When the user submits a 'POST' request on '/', we know they want to create a new post. So let's create a route to recieve the title and message that will be in the body, and use them to create a new post object in our database.
```
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    message: req.body.message
  }).then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error creating your new post"})
  });
});
```

Go ahead and test it out! You can now create your own posts! congrats! Now let's look at editing and deleting posts.

Deleteing is easy, let's do that first.

## `POST` request on `/deletePOST`

If we get a 'DELETE' request on the '/' path, we know the user wants to delete a certain post, and will be sending that post's id in the request body for us to use.

> **Mini Challenge!**
  > * Create a blank delete route

In the delete route, we will use a special mongoose method called `Post.findByIdAndRemove()`, we will pass it the id, and then re-render the page either without the post or with an error that it did not work.
```
router.post('/deletePost', (req, res) => {
  Post.findByIdAndRemove(req.body.post_id).exec().then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error deleting your post"});
  })
})
```

Now the final step: Editing the Posts.

## `GET` request on `/editPost`

First, we have to render the form to edit the post. Now this is a get request, but the user is sending us the post._id. How do we get our hands on this? Well unlike a POST request, a GET request sends the data over insecurely on the url. We can get these by `req.query`.

First, we need to define the route to recieve a GET request on '/editPost'.
```
router.get('/editPost', (req, res) => {
  // do something here
})
```

Now we need to locate the post that the user wants to edit. We will do this in the router method.
```
Post.findById(req.query.post_id).exec().then((post) => {
  let postForm = {
    postTitle: post.title,
    postMessage: post.message,
    postId: post._id
  }
  Post.find().exec().then((all_posts) => {
    res.render('index', {posts: all_posts, postForm: postForm})
  }).catch(() => {
    res.render('index', {error: "There was an error loading posts from the database."})
  });
})
```

Now we are sending all the posts, and the postForm for the post to be edited to the view. Let's head over to the view and see how we will handle this.

In *index.pug*, in our loop of displaying posts, we need to do a check to see if this post has a postForm associated with it. First we need to test to see if the postForm exists, and then test if the id matches the id of the post about to be displayed. If it does, we will render a postForm in its place. We will do this test directly inside the `.card` div element.
```
.card
  if postForm && postForm.postTitle == post.title
    form.mt-2(action='/editPost' method="POST")
      input(type='hidden' name='post_id' value=post._id)
      .form-group
        .row
          .col-2.text-right
            label.mt-2(for='editedTitle') Edit Title: 
          .col-8
            input.form-control(id='editedTitle' name='editedTitle' value=post.title)
      .form-group
        .row
          .col-2.text-right
            label.mt-2(for='editedMessage') Edit Message:
          .col-8
            textarea.form-control(id='editedMessage' name='editedMessage' rows='5')= post.message
      .form-group
        .row
          .col.text-right.mr-5
            button.btn.btn-success.btn-sm(type="submit") Update Post
```

Now let's create the route that will handle the 'POST' request that is made on the '/editPost' path when this editing form is submitted. We will do this with another special mongoose method called `Post.findByIdAndUpdate()`
```
router.post('/editPost', (req, res) => {
  console.log(req.body.post_id);
  Post.findByIdAndUpdate(req.body.post_id, {title: req.body.editedTitle, message: req.body.editedMessage}).exec().then(() => {
    Post.find().exec().then((all_posts) => {
      res.render('index', {posts: all_posts})
    }).catch(() => {
      res.render('index', {error: "There was an error loading posts from the database."})
    });
  }).catch(() => {
    res.render('index', {error: "There was an error updating your post"})
  });
});
```

## Summary

And There you have it! Your first real Express App! Show it off! I hope you had fun, learned a lot, and stay hungry for more. Till next time my friend...