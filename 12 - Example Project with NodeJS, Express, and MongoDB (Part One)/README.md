# Lesson 12 - Example Project with NodeJS, Express, and MongoDB (Part One)

**Welcome to the Final Project for this series! If you have made it this far, congratulations on learning and not giving up! Get ready to put your new-found skills to the test as we build this full NodeJS, Express, and MongoDB app.**

### What the app will do:

The app will be a SPA (Single Page Application) called Status Of You. It will be your own personal mini-blog where you can creat, edit, and delete your posts. Through the course of this app creation process, I will present you with mini-challenges. These will be things that we have done before in the past, and I will challenge you to try to do them from memory, but if you get stuck, feel free to look back at previous lessons. Now let's get started!

## Generate the App


> **First Mini-Challenge!**
    > * Use Express-Generator to create your app, and call it whatever you like. (Remember to use `--view=pug` to set the view engine)
    > * Go into the app and install the dependencies, and then install mongoose and nodemon.
    > * Create the "devstart" script we have used in the past, using nodemon. (in *package.json*)
    > * Run the app and open it in the browser!

## Clean Up Un-needed Code

Some of the things that express-generator build for us we will not need. We will not need the users aspect at all. Go to *app.js* and delete the following lines:
* `var usersRouter = require('./routes/users');`
* `app.use('/users', usersRouter);`

We can also delete the *users.js* file in the *routes/* folder.

All Clean Now!

## Create Layout Page

Remember that with view engines, we can create a layout page, then load in additional blocks to it. So let's create our layout page to have all our CSS and JS in just one file. 

> **Mini-Challenge!**
    > * Go to http://getbootstrap.com, and go to the 'Get Started' page.
    > * Copy the CSS cdn link and add it to the head of our *layout.pug* page. (`pug` CAN interpret plain html, but try to turn it into real pug language code like we did before. It is best practice to just stay uniform)
    > * Copy the JS cdn links and add them to the bottom of the body of our *layout.pug* page.
    > * Grab the two 'meta' tags from the 'Starter Template' on bootstrap's page and add them to your header as well.

#### Styling

To add custom CSS, go to *public/stylesheets/style.css*. (This is already linked in the head of our layout file) We can add a custom background utitily class like: 
```
.bg-gray {
  background-color: #ECECEC;
}
```

We will use this class to normalize all the backgrounds of our posts and sections.

## Create Index Page

Right now, our index page is not anywhere what we want it to look like. We are going to want header to our page, a form for creating posts, and a list of posts that we have already posted previously. For now, let's just set up the UI with some dummy info.

Go to *views/index.pug* and replace what is currently in the block with our own code. 

> Remember that indentation is **VERY** important in pug/jade. So be sure to use either ALL tabs or ALL spaces. 

Start by adding a jumbotron from bootstrap to be our page title/header.
```
block content
  .container
    .row
      .col.text-center
        .jumbotron
          h1.text-primary Status Of You
          p.lead Here is where I post anything I like!
```

Now add a button below the jumbotron that will show/hide a section where we will add our 'new post' form.

> Notice the button will be on the same indentation level as the jumbotron. This is because the button is not **inside** the `<div>` that is the jumbotron, but on the same html DOM level as it.
```
.jumbotron.bg-gray.text-center
    h1.text-primary Status Of You
    p.lead Here is where I post anything I like!
button(class="btn btn-primary" type="button" data-toggle="collapse" data-target="#formSection") Add a New Post
```

Now add the section that will be shown/hidden when the button is clicked. (It will have the same id as the `data-target` for the button)
```
#formSection.collapse.mt-2
    .card.card-body.bg-gray
        p Just some holder text   
```

Now we will add the form. We will give the form an 'action' of '/' and a method of POST. Then we will know on our server, whenever we get a POST request on the '/' route, the user is trying to create a new status/post.
```
#formSection.collapse.mt-2
    .card.bg-gray.card-body
    form(action='/' method='POST')
        .form-group
        .row
            .col-2.text-right
                label.mt-2(for='title') Title:
                .col-8 
                input.form-control(id='title' name='title' placeholder='An instersting title...')
        .form-group
        .row
            .col-2.text-right
                label.mt-2(for='message') Message:
                .col-8 
                textarea.form-control(id='message' name='message' placeholder='What do you have to say?' rows='5')
        .row
            .col
                button.btn.btn-success(type='submit' data-toggle='collapse' data-target='#formSection') Create Post
```

Now we will just add a couple dummy posts below this to demonstrate what it will look like. Make sure to put the `.row`'s on the same indentation level as the last one. Make two or three of these: 
```
.row.mt-3
  .col-11
    .card
      .card-header
        h5.card-title An Awesome Title
      .card-body
        p.card-text This is a very interesting post about...
  .col-1
    form(action='/editPost').mt-2
      input(type='hidden' name='post_id' value=post._id)
      button.btn.btn-outline-primary(type='submit') Edit
    form(action='/deletePost' method='POST').mt-3
      input(type='hidden' name='post_id' value=post._id)
      button.btn.btn-outline-danger(type='submit') Delete
```

Notice a couple things. First, we have two forms on the right side of the post, each with a hidden input and a submit button. The first, 'Edit' has a action and no method, so it will default to a 'GET' request. So we know when a user has sent a 'GET' request to the '/editPost' route, they want to edit their post. And we know when the when the use sends a 'DELETE' request to the '/' route, they want to delete a post.

Second, we have the value of the hidden inputs set to 'post._id'. Where do we get this? Well we will pass this in when we render the page server side. 


## Summary

We have got our UI setup and now that we know where everything goes, we can start use our server to do something with this page. We will come back to this later and change a few things, namely the posts, once we know what data we are passing to the view.

## Next Lesson 

In the next lesson, we will configure our database to hold posts. We will add the database connection, and build our Post Schema.
