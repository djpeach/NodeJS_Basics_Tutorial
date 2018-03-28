# Lesson 04 - A NodeJS HTTP Server

## The Request and Response

You will notice in our request handler(`doThisOnRequest()`), that we pass in a request and response. What are these? Well Request is what we are getting from the server. It is the user's request to get or send something from or to the server. And the Response is what we are sending back to them in response. This could be some text, some json data, a html or other file, or an error. So how do we do this? Well lets start by talking about why the page gets stuck loading.

The page gets stuck loading because the response was never finalized and sent off back to the user. This is dont with `response.end()`. So let's add that to our request handler.
```
console.log('User made a request');
response.end();
```

Now restart the server: `npm run start`. Go to http://localhost:3000, and reload the page. It loads! And back in our terminal, we see the log 'User made a request'. All is good. So what else can we do with request and response? Well let's see!

## Stop! Nodemon Time!

It seems a waste of time to have to stop and re-start our server everytime we make a slight change to our files. So can we fix this? With the power of npm, absolutely!

Nodemon is a npm package that monitors your files, and if it notices you save any new changes, will restart your server for you, or you can do it manually still with `rs`. So lets install it. Go to your terminal and run `npm install nodemon --save`. 

Now that we installed it, in order to use it, let's go modify our scripts in `package.json`. After our start script, add a new _devstart_ script. `"devstart": "nodemon index.js"`. Now stop the server, and run `npm run devstart`. From now on, nodemon will restart our server for us anytime we save changes! 

Alright back to request and response.

## Request

The request is full of all sorts of neat stuff, but what we are interested in is the _method_ and _url_ the user sent our way. The method tells us what the user wants. The default method is _GET_ and lets us know the user wants some data or file. The url tells us what route the user is trying to access. The default is _'/'_ which is just the blank slash at the end of the url in the browser. So let's set up a route handler for these conditions. In our request handler, we will test for these conditions.
```
if(request.method == 'GET' && request.url == '/') {
        serveHomePage(response);
    } 
```

Here we call `serveHomePage()` and pass in our response when the user sends us a GET request on the url of '/'. Lets define what we will do in this Home Page handler. We will do this with the response object we pass to it.

## Response

We will use response to write the head and body before sending it back to the user with `response.end();`. The Head of the response is what tells the web browser what happened on the server, and what to expect coming it's way, among other things. Status code `200` means everything went ok, and `"text/html"` tells the browser to be ready to render some html.
```
let serveHomePage = (response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Welcome to my home page</h1>");
    response.write("<a href='/nextpage'>Check out the next page</a>");
    response.end();
}
```

Here we send the user a couple bits of html in the form of a `<h1>` element and a `<a>` link to another page. Notice the href in this link. Remember the default method is already GET, and now we are sending the server a new url when the user clicks this link. Let's get ready to recieve this. 

## Serving other pages

Lets test for a GET request and this new route. Append this to our current route test.
```
else if (request.method == 'GET' && request.url == '/nextpage') {
    serveNextPage(response);
}
```

Now let's define the Next Page handler for this as well.
```
let serveNextPage = (response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h3>Welcome to the next page!</h3>");
    response.write("<a href='./'>Go back to the home page</a>");
    response.end();
}
```

And there we go! Now we can go back and forth between two pages! Marvelous!

## Error Pages

But what if the user asks for a page or route we don't have? Well then we send them their favorite error - A 404 error! To the end of our test for routes, we will ad an else that will catch anything the user sent that we don't have a response for.
```
else {
    send404Error(response);
}
```

Define the 404 Error handler, notice we change the `"Content-Type"` in this case because we are justing sending them some text.
```
let send404Error = (response) => {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found.")
    response.end();
}
```

Now try going to http://localhost:3000/randomPage. You will get sent the 404 Error. 

## Summary

Congratualations! You have just created your first NodeJS server! Now feel free to configure as many requests and responses that your heart desires and see your wep server get as big as your want! Soon you will get tired of manually setting each route and writing each response. This is what we will fix in our next lessons with yet another great npm package called Express. 

## Next Lesson 
As I said, we will be learning to use Express in the next lesson, which will make our lives easier and our server better! See you there!


