# Lesson 05 - Making our own first Express App with NodeJS

## Create the Express App

Redo the steps from the last lesson.
* Run `express myapp --view=pug`
* Run `cd myapp`
* Run `npm install`

### Start to make it our own

Start by opening the entire project in a text editor. The first thing I always do is to create my own 'devstart' run script that I prefer to typing out the whole DEBUG thing everytime. To do this I use a tool called 'nodemon' which will watch our files and re-start our server for us when we make updates. Super convenient.

* Run `npm install nodemon --save`
* Go to `package.json`
* Add a script - `"devstart": "DEBUG=myapp:* nodemon ./bin/www"`

**Now we can run the app with our new script**

* Run `npm run devstart`
* Open browser and navigate to the correct port
* Looks just like last lesson.

## Time to make some changes

* Go to index route and pass in 'My NodeJS Server!' as the title.
* Go to `views/index.pug` and change the `p` tag to say 'Hello World!'

#### What is happening? 

The first thing the express server is doing is to check the url the user enters. This is going to be the request url. The url gets parsed, and express starts trying to use regex to match it to a route we have set. So http://localhost:3000/ will match `'/'`, and http://localhost:3000/users will match `'/users'`. http://localhost:3000/login won't match any routes and will fall through to the error because of next();. 

Now that express has found the correct route, ('/'), it sends it to the routes file and check what to do. We have taken in the request, response, and next, being passed along, and have told response to render a certain page, with certain data passed to that page (res.render('index', { title: 'Express' });).

Now express know what page to render, and in that page, we have that data we passed in available to us. So we can set our h1 to our title, and write a custom p tag. Express renders this all for us, and we can view it in our browser.

## View your handiwork

Check out the changes updated in the browser. Now you see how easy it is to get up and started with a simple Express server!

## Next Lesson

In the next lesson, we will really start to dive in and create some real web pages with the bootstrap framework for styling and our code for content. See you there!