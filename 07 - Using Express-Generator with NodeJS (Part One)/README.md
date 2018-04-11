# Lesson 07 - Using Express Generator with NodeJS - Part One

## Video Tutorial: 
[Lesson 7 - Express Generator with Node.js (Part 1)](https://youtu.be/wyQcqXXLses)

## What is Express-Generator

Express Generator is a command line tool that creates for us a skeleton project with node and express already set up. It also includes some basics routes, and debugging that we would otherwise have to manually set up. So now when creating a project, we will use express-generator instead of manually creating a folder and running `npm init` inside of it. 

## Install and Run Express-Generator

First we need to install express-generator from npm. Open your terminal and type:
```
npm install -g express-generator
```

The `-g` flag indicates to npm that we want to install this package to our *global node_modules* and not local to any one project. It is likely you may need to have permission to install this package globally, so make sure to run as an admin on Windows and run with *sudo* on Mac.

Now that we have the tool installed, lets go over how to use it.

Express generator works by going into the command line and running `express` with some options. The options we will be giving it is the project name, which is required, and the view engine, which is optional. The view engine is what lets express know how to render our HTML pages server-side. You will see how the view engine works as we go through these lessons.

So let's get our project setup. In your terminal/command line: 
```
express --view=pug express_app
```

`pug`, formerly known as jade, is a html-rendering language that we want to use with express for our projects. If you are familiar with or prefer other view engines, the generator also supports `hbs` for handlebars and `ejs` for embedded javascript.

Otherwise, let's move on and check out the project!

## Walking through the new app

First, we will go into the folder and install our npm packages that express needs for this generated project. Type these into your command prompt. 
```
cd express_app
```
This next command installs our node package dependencies based on the package.json that was generated for us: 
```
npm install
```

Now open the whole project in your text editor of choice. For me using VSCode: `code .`. Now let's walk through the files here.

* > *package.json* - You will notice in this file that we already have a ***start*** script defined for us. But you should see that it is not pointing at *index.js* like we are used to. It points to *./bin/www* What is this? Let's take a look.
* > *bin/www* - This file is something express-generator creates for us to configure a few things before kicking off *app.js*(the equivalent of *index.js*) for us. It sets up our port and server, as well as some basic debugging settings. For the most part we can just ignore this file and let it do its thing.
* > *node_modules* - This is just a folder with all the node modules that **express** needs. There are more here than we have used previously, but we will go over them in *app.js*. We can (and should) also leave these alone.
* > *public/* - This is the folder where we hold all our static files. So if a user or our site requests something at /images/catPicture.jpg, this is where our express app will look. We will also use this to store our CSS and JavaScript files.
* > *routes/* - This is just like the routes folder we created last lesson. The files in these folders will handle all our routing for us. 
* > *view/* - When we tell our express app to render a certain view(page), this is where it will look for that file.
* > *package-lock.json* - This is a list of all our dependencies and thier info. We can mostly ignore this file.
* > *app.js* - This is the brains, the headquarters, the main controller of our express app. Lets go over the aspects of this file in detail.

## app.js

* > 
    > ```
    > var createError = require('http-errors');
    > var express = require('express');
    > var path = require('path');
    > var cookieParser = require('cookie-parser');
    > var logger = require('morgan');
    > ```
    > These imports add to our app several npm packages that express uses to run the server. 
    > * createError from http-errors will allow us to easily create errors for development.
    > * express is the package that creates the express app itself.
    > * path is a package that normalizes file paths and urls across all operating systems.
    > * cookieParser is a package that parses cookies from the browser session.
    > * logger from morgan is just some middleware that logs out server request info during developement.
* > 
    > ```
    > var indexRouter = require('./routes/index');
    > var usersRouter = require('./routes/users');
    > var app = express();
    > ```
    > We saw these in the last lesson, we are importing our routing modules and then creating our app with `express`. 
* > 
    > ```
    > app.set('views', path.join(__dirname, 'views'));
    > app.set('view engine', 'pug'); 
    > ```
    > This is where we **set** the **viewengine** of the **app**. We first tell the app where to find the view, using the **path** module to normalize that path for whatever operating system we are on, and then we set the view engine, or extension, that we want the app to use.
* >
    > ```
    > app.use(logger('dev'));
    > app.use(express.json());
    > app.use(express.urlencoded({ extended: false }));
    > app.use(cookieParser());
    > app.use(express.static(path.join(__dirname, 'public')));
    > ```
    > Here we are setting up some middleware using some of the modules we imported at the top. 
    > * `app.use(logger('dev'));` is how to set up logger from morgan to log out useful development messages about our server. 
    > * `app.use(express.json());` tells our app that we want to use json data, and `app.use(express.urlencoded({ extended: false }));` tells our app what parsing algorithm to use. (extended: false = shallow = no nested objects, extened: true = deep = can parse nexted objects). We won't be using quite yet, but we will when we start to store information in the database. 
* > 
    > ```
    > app.use('/', indexRouter);
    > app.use('/users', usersRouter);
    > ```
    > This is some custom middleware we are setting by telling the app to `.use` these routing modules. We did this last lesson as well.
* >
    > ```
    > app.use(function(req, res, next) {
    >   next(createError(404));
    > });
    > app.use(function(err, req, res, next) {
    >   res.locals.message = err.message;
    >   res.locals.error = req.app.get('env') === 'development' ? err : {};
    >   res.status(err.status || 500);
    >   res.render('error');
    > });
    > ```
    > These are error handler that catch and then render an error page for us as we are in development. 
* >
    > ```
    > module.exports = app;
    > ```
    > This last line just exports the entire app object we just built so that *bin/www* can get it and launch it when we run our `start` script.

## Summary
Ok! Lots of information! Take a moment to walkthrough all this if you need to.  If you are still a little last, do not fear! We will start to use all this in the next lesson.

## Next Lesson

In the next lesson, we will begin to edit the code to make the app our own and see it all in action. See you there!
