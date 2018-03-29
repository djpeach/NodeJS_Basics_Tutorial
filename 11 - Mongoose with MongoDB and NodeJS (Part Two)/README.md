# Lesson 11 - Mongoose with MongoDB and NodeJS (Part Two)

## Pre-requisite for this Lesson

* Download Postman: Go here https://www.getpostman.com and download the PostMan app. We will use this to send requests to our server and get a response. Typically we would expect this to be done with a browser, and a user, but for our purposes in our lesson we will use this app to focus just on the routing and CRUD operations aspect of the lesson.
* Using Postman:
    * Open the app
    * Select the request method you wish to test on the left of the url bar (POST, GET, PUT, DELETE)
    * Enter the url (http://localhost:3000/somePath)
    * If a POST or PUT to add key: value pairs:
        * In the top request tabs, select the Body tab.
        * Select x-www-form-urlencoded since we are using `app.use(express.urlencoded({ extended: false }));` as middleware from our *app.js*
        * Enter keys and values, ignore description
    * Send the request


## Create Route for CRUD Operations

To keep our app modular and clean, lets create a new module that will handle all our database requests. We will call it *db_routes.js*. So go into our *routes/* folder and create that file.

Create and export the router object just like we have done before.
```
var express = require('express');
var router = express.Router();
//
// set up routes here
//
module.exports = router;
```

Now let's go to the brain of our app, *app.js* and pull in this new *db_routes* module. In *app.js*, beneath the previous router imports, import our new router.
```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/db_routes');
``` 

Now let's tell our app to use this new router on all '/db' routes we are sent. Add this after the other router additions.
```
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/db', dbRouter);
```

## Creating the DB Router

Now that our app knows to use this new db router, lets build it. We will start with a route to create a new user object.

#### Creation Route (POST)

We will start with a basic POST request on '/create' urls.
```
router.post('/create', (req, res) => {
    // Do something with the route here
});
```

This route will need to accept a first name, last name, username, email, and password. These get passed to us in the request that is sent to the server. They are held in the request body. Let's set up our route to expect these. 
```
router.post('/create', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
});
```

Now we will use mongoose to save a new user with all these values that were sent to us. In order to create a new user though, we first need to import the UserSchema. So let's do that at the top.
```
const User = require('../models/user_model');
```

Now we can use this to create a new user with `User.create()`.
```
User.create({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password
    }).then(() => {
        res.end('User was created.');
    }).catch(() => {
        res.end('Error creating user.');
    });
```

Here we set each user field to the corresponding variable we created from the `req.body`. `User.create()`, returns a promise, so we can define a `.then()` function to run if the object is successfully created, and a `.catch()` function to run if there was an error creating the object for whatever reason. Notice that we have to end the response in both cases. This is in order to complete the reqest - response cycle and get ready for the next one.

#### Reading Route (GET)

Now we will create a simple get route to allow the user to read all the users from our database. We will do this with a simple 'get' route on the '/listUsers' url. We will start with the get route alone. 
```
router.get('/listUsers', (req, res) => {
    // do something here
});
```

We will use mongoose's `User.find()` with no parameters to return every user in the database. 
> Mongoose queries **Do not** return promises, so we will use mongoose's `.exec()` to tell it to return us a promise.
```
router.get('/listUsers', (req, res) => {
    User.find().exec().then((all_users) => {
        res.json(all_users);
    }).catch(() => {
        res.end('Error fetching all the users from database');
    });
});
```
> Notice the new `res.json()`. This is a function on the response that sends some JSON data and ends the response.

#### Editing Route (PUT)

Now we will create a simple put route to allow the user to edit a user from our database. They will specify the user by email address, and we will find it with our static `findUserByEmail()` function on our user model. We will do this with a simple 'put' route on the '/editUser' url. We will start with the put route alone. 
```
router.put('/editUser', (req, res) => {
    // do something here
});
```

We will get the email sent by the user in the request body, and then we will pass it to our `findUserByEmail()` function to return a promise of a user. 
```
router.put('/editUser', (req, res) => {
    User.findUserByEmail(req.body.email).then((foundUser) => {
        res.json(foundUser);
    }).catch(() => {
        res.end('Error finding user with that email');
    })
});
```

#### Removal Route (DELETE)

Lastly, we will add a route to delet an object by email. Let's start with a simple 'delete' route.
```
router.delete('/removeUser', (req, res) => {
    // do something here
})
```

We will use mongoose's `User.remove()` to delete the object from the database.
```
router.delete('/removeUser', (req, res) => {
    User.remove({email: req.body.email}).exec().then(() => {
        res.end('User successfully deleted');
    }).catch(() => {
        res.end('Error removing user with that email');
    });
});
```

