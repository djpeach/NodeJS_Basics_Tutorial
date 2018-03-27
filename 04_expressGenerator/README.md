# Lesson 04 - Express Generator

## What is Express-Generator?

> Express Generator is a command-line tool that generate a pre-set express app and saves us the time in setting up Express with NodeJS

The express-generator tool allows us to create an express ap very easily, and we will use this from now on to start our apps.

## Using express-generator

Install express-generator by opening your terminal and running `npm install express-generator -g`. The `-g` flag tells npm to install this particular package globally so it can be used anytime, even without a pre-existing project with a `node_modules/` folder.

Once that installs, we can can use it to create our project. I will navigate to my Desktop and use it there. Run `express myapp`. You will see a folder being created. Now we will cd into it. 

Run `cd myapp/`. Open this project in a text editor. For me, I use VSCode, so `code .`. Now lets have a look around.

#### bin/

In `bin/` we find a file called `www`. This is a generated file that sets up our app, some basic debugging, and sets our port and app to listen on the port. We can mostly ignore this file.

#### public/

In `public/` we find our static files such as images, js files, and css files.  These are files that we will use when created webpages with our view.

#### view/

In `views/` we find some basic view pages. Notice the `.jade` extension. Jade(aka Pug) is a html-generating language. It makes created large html web pages easier, especially when combined with a framework like NodeJS. More on these pages later.

#### routes/

In `routes/`, we have some routes, imagine that. What the routes do is to guide the http requests properly to the function we want each route to call. So when a user want to get the page at the url of `localhost:3000/users` we will call the function in that route, and right now it returns a response that says 'respond with a resource.' More on these later as well.

#### app.js

`app.js` is the brains of our project. This is the headquarters where we will coordinate everything else, from proper routing delegation, to importing middleware tools for our app, to setting view paths and view engines, to catching errors and displaying them to the user.

## Run the project

In your `myapp` directory, run `DEBUG=myapp:* npm start`. This sets the debugger in `bin/www` to display info for us. Like that we can see what port the app is listening on. Go to a browser and go to http://localhost:3000 (or whatever port your app is listening on), and there is our express app! Congratulations!

## Next Lesson

In the next lesson, we will create an app with express-generator, and start to edit the files to make it our own! See you there!

