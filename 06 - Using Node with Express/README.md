# Lesson 06 - Using Node with ExpressJS

## Setup Express

First we have to create our node project.
* `mkdir node_express`
* `cd node_express`
* `npm init --yes`
* `touch index.js`
* `code .`            - Open the project in a text editor(for me `code` opens VSCode)
* In *package.json*'s scripts: `"start": "nodemon index.js"`   - Start script for the server.

In *index.js*, build the bare-bones server. We will be replacing much of this with Express code in a moment.
```
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:3000/`);
});
```

Now we will need to install Express, which is a npm package. So in our working directory (*node_express*), run `npm install express --save`. 

Now that we have Express installed, let's use it in our project. Go to our _index.js_ and import Express to the project. We will add it right after the import for http.
```
const express = require('express');
```

Now we will use the new methods provided to us by the **express.js** module to replace our vanilla node server code with some upgraded express server code! First we will run the `express()` method to create an app. This will go after its import.
```
const app = express();
```

Using this **app**, we will start to replace code. So instead of `server.listen()`, we will instead use `app.listen(0)`.
```
app.listen(3000, () => {
    console.log('Server now running with express at http://localhost:3000')
  });
```

Now we have no use for our old `server` variable so we can completely remove that, along with its entire function. And now we have an express app! Go ahead and run `npm run devstart` (or whatever you called your start script), to see your app in action. Check it out in the browser as well if you wish, although there won't be much there yet.

## Routing with Express

Our app isn't too exciting yet, so let's add some routing to give our web app some functionality. Routing with express is very easy, instead of testing for the **request.method** and **request.url** in `if` statements, we can just run `app.METHOD('url', someFunctionToRun);` So a **GET** request on the **'/'** url would look like `app.get('/', indexPageHander)`. Or a **POST** request to the **'/newUser'** would look like `app.post('/newUser', createNewUserFunction);` 

Let's define and use a handler for our app's index page.
```
let indexPageHander = (req, res) => {
  res.end('Hello World!');
}
app.get('/', indexPageHander)
```

Now run the server and check our web page to see our text! Then to further demonstrate routing with express, we will create our own routing modules. In our *node_express* directory, create a *routes* folder to hold these routing modules. In this *routes* folder, create a *index_routes.js* and a *users_routes.js*. Now we will go back to *app.js* and import these new routing modules. We will add this at the top, right under creating our app.
```
const index_router = require('./routes/index_routes');
const users_router = require('./routes/users_routes');
```

Take a moment to look over what is happening here if you need. We are getting the appropriate new modules and setting them to variables with fitting names.

Next we will use these new routers. We do this by telling the app to `.use()` these routers when certain url routes are sent to it.
```
app.use('/', index_router);
app.use('/users', users_router);
```

Here we tell the app to use the `index_router` on **'/'** routes and `users_router` on the **'/users'** routes. Now we will set up these router files.

## Routing Modules

In *routes/index_routes.js*, we will first import **express**, and then run `express.Router()` to give us a router middleware object that we can export out of our module at the end.
```
const express = require('express');
const router = express.Router();
```

Now we will use our router just like we used app in *index.js*. To make cleaner code, we will define our **indexPageHander** inside the `.get()` call, anonymously. 
```
router.get('/', (req, res) => {
    res.send('<h1>Welcome to my awesome index page!</h1>');
});
```

Lastly in this file, export the router middleware at the end. 
```
module.exports = router;
```

Next, do the same to the *routes/users_routes.js* module as well, just change the text we send back to the user.
```
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>No Users Yet:(</h1>');
});

module.exports = router;
```

Notice in these, that express is smarter than node by itself, and can figure out that we are sending out HTML. We will see even better ways to do this when we begin to use the **express-generator** to pre-build a boilerplate app for us to work with.

## Next Lesson

In the next lesson, we will use this **express-generator** tool to make our apps get off the ground much quicker. See you there!