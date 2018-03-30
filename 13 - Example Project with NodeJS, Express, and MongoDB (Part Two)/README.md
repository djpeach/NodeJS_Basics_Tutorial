# Lesson 13 - Example Project with NodeJS, Express, and MongoDB (Part Two)

## Rendering

Last lesson we set up quite a bit of UI, and remember how we said that this is a SPA (Single Page App)? Well that means that our routes will all be on the same url path (except 'editPost'). So how do we tell the difference? Well we know the difference because a 'GET' request on the '/' path is going to need totally different handling than a 'POST' request on the same '/' route. Let's list out the routes we are expecting based on what we have so far, along with the method and data we expect to be sent along with it.

> * **`GET` request on `/`** - This will be the initial route request when the user loads the page. We will get no data, but we will render everything we have, including header, new post form, and all the posts we have so far

> * **`POST` request on `/`** - This means that the user has submitted their form for creation. We should expect the following data to save to the database:
  >   * req.body.title - The title the user created.
  >   * req.body.message - The message the user wrote for the post.

> * **`GET` request on `/editPost`** - This means that the user has requested to edit a certain post. We will re-render the index page to them still, but this time, the post they wanted to edit will be replaced by a pre-populated form, and they can change whatever they need to and submit it on a 'PUT' request to the '/' path.We should expect incoming data to be:
  >   * req.body.post_id

> * **`POST` request on `/editPost`** - This means the user has submitted a form to update an existing post after editing it. We will get the following data.
  >     * req.body.updatedTitle - The new title the user is submitting to be edited.
  >     * req.body.updatedMessage - The new message body the user wants the post to say.

> * **`POST` request on `/deletePost`** - This means the user has submitted a request to delete a certain post. We should expect incoming data to be:
  >   * req.body.post_id

## Connect to Database & Define Schema

Before we render anything however, we have to have a have a Post object to work with. And a database to save it to. So let's create our database connection first, and then define our Post Schema that we will be using.

To create the database connection, we have to go to *app.js*. First we have to import the mongoose module.

> **Mini Challenge!**
  > * Import the mongoose module to *app.js*

After we get mongoose imported, we will use it to establish our connection right below the imports.
```
mongoose.connect(http://localhost:27017/statusofyou);
mongoose.connection.on('error', console.bind.error('Error Connecting to MongoDB));
mongoose.Promise = global.Promise;
```

Now that we are connected, we can define the Post Schema. 

> **Mini Challenge!**
  > * Create a *models/* folder
  > * Create a *post_model.js* file in the *models/* folder.
  > * Import mongoose
  > * Get a 'Schema' variable from mongoose with `mongoose.Schema`
  > * Create a `new Schema({})` with a title, and message. Make both fields a string, and both fields required
  > * Export the 'PostSchema' with using `mongoose.model()`
    >   * (hint: `mongoose.model()` takes in the collection name, and the schema name)

## Summary

We are going to stop here and configure all the routes we listed in the next lesson. 

## Next Lesson 

In the next lesson, we will configure our routes to accept requests and send back responses of rendered views, all while doing appropriate manipulation with our post objects.