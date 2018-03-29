Lesson 10 - Mongoose with MongoDB and NodeJS

## Setup

Now that we have MongoDB, and understand a little bit about how it works, let's learn how to integrate it to a node and express app. First we need to create our app, which we will use express-generator for. 
* `express --view=pug mongodb_app` - use express-generator to create the app
* `cd mongodb_app`                 - go into the app
* `npm install`                    - install dependencies
* `npm install mongoose nodemon`   - install mongoose and nodemon modules for this project

Also, add our `devstart` script to *package.json*
```
"devstart": "DEBUG=mongodb-app:* nodemon ./bin/www"
```

Now we can use that to go ahead and run our app to test everything was set up correctly: `npm run devstart`

## Adding our Database

To add the database we need two things: A database instance up and running on a port, and a connection to that database and port in our code. This is what hooks our app into the database. In order to do this, we first need to get our database running. If you remember from the last lesson, we just open a new terminal and run `mongod`. This should start up your database and inform you of the port it is running on. (Most likely default port 27017)

Now in our code, we will add a connection to our running database, so we can use it within our app. Go to the brains of our app, *app.js*, and import the mongoose modules.
```
const mongoose = require('mongoose');
```

Then right after that, we can make our connection to the database. We will make the connection, then use that connection to set error reporting, and also we will set the Promise type that mongoose gives us to our native Promises. There are other libraries that you can use such as `bluebird` and `q`, but we will just use `global.Promise`'s for now.

So first, make the connection:
```
mongoose.connect('mongodb://localhost/mongoose-demo');
```

Then set the error handling on that connection:
```
mongoose.connection.on('error', console.error.bind(console, 'Error connecting to the MongoDB'));
```

Finally, set the mongoose Promises type:
```
mongoose.Promise = global.Promise;
```

That's it! Now we are connected and can use our database. Let's add a route to our app that will start to make use of the database.

## Using the Database - Define a mongoose Schema

Using a Mongo DataBase with Mongoose means we can create objects with fields that will standardize what we save to a collection in the database. So if we had a 'Users' collection in our 'mongoose-demo' database, we would want all our users to have names, email addresses, phone numbers, etc. And if we had a 'Snacks' collection in the same database, we would want it to have a brand, calorie count, flavor, etc. 

We define the objects with mongoose Schema. To keep everything organized, we will place our Schemas in a folder called *models*.  Create that folder in our working directory now.
```
mkdir models
```

Now let's create our user Schema in a file called *user_model.js* 
```
touch user_model.js
```

In our user model, we need to import mongoose and use it to create a Schema variable.
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

Now we will use that Schema variable to create a JSON-style object to represent a user. We will define expected fields in key: value pairs, with the value being a set of options for each key.
```
let UserSchema = new Schema({
    firstName:          { type: String, required: true },
    lastName:           { type: String, required: true },
    username:           { type: String, required: true, unique: true },
    email:              { type: String, required: true, unique: true  },
    password:           { type: String, required: true}
});
```

Here we have defined every field in our user model to be a string, and be required. Also, the usernames and emails must be distinct from each other. If they are not we will get an error when we try to save it to the database.

Now at the end of the file, we will export this user_schema using `mongoose.model` to specify the collection and Schema to use. We will set this to a 'User' viable so we can do some more with this object in a second.
```
let User = module.exports = mongoose.model('User', UserSchema);
```

#### More with Schema 

Along with basic fields we can define 'virtual fields' that don't exist in the database, but we can access as if they belong to the object by doing some calculation or manipulation with the fields that do exist in the database. Lets use this to define a 'fullname' variable on our 'User'.
```
UserSchema.virtual('fullName').get( function() {return `${this.firstName} ${this.lastName}`});
```

We can define static functions to the 'User' Schema in general with `UserSchema.statics`. Lets use this to define a `findByEmail()` function. Because this will be a static function, we do not need a specific user to run this function with.
```
UserSchema.statics.findUserByEmail = (email) => {
    return User.findOne({email: email}).exec();
}
```

We can define instance functions to run on any user we may have. We do this with just `UserSchema.methods`. Lets use this to create a `comparePassword()` function.
```
UserSchema.methods.comparePassword = (passwordToCompare) => {
    if(this.password == passwordToCompare) {
        return true;
    } else {
        return false;
    }
}
```

## Next Lesson

In the next lesson, we will see how to use CRUD (Create, Read, Update, Destroy) operation with our app on real user objects. See you there!