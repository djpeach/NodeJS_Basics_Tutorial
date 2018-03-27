# Lesson 03 - Using Express with NodeJS

## What is Express?

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

In other words, Express takes NodeJS, and makes it easier to use and more powerful for our developement at the same time.  Express lets us build a real server with dynamic routes. Express gives us real functionality in a way that is easy to visualize and keep up with. 

In order to get started using it, we us npm to install it. Before we do that, however, let's set up our node enviroment.
* Create a directory
* Navigate there in terminal
* run `npm init --yes`
* create `index.js`
* create a script, `"start": "node index.js"`

Now that we have a bare-bones node enviroment set up, we can add express in to it. In your directory we created run `npm install express --save`

## Using Express 

Go into `index.js` and we can start setting up express.

First of all, we need to import it so we have access to it. Node knows to look to `node_modules/` first whenever we import something. So we can add the following to `index.js`: `const express = require('express')`

Now we have express imported to our file, lets use it to create our 'app'. `const app = express();'`

Now we have an app created, lets 'turn it on' or set it to listen on a port like we did with node by itself. `app.listen(3000, () => { console.log('Your server is now running on port 3000')});`

The server is ready to be turned on, but as of now it won't do anything, so let's change that. Add `app.get('/', (req, res) => {res.send('Welcome to my Server!')})` after the app creation but before we set the app to listen on a port. You will see that the order of these routes and middleware(other tools we use with node) matter.

## Run the server

Go to the terminal and in the working directory, we can now run `npm start`.

Now open a browser and go to http://localhost:3000 to see our server!

## Next Lesson

In the next lesson we will be using an express tool called express-generator which will create a project for us with the app and other tools and setting pre-set. See you there!

