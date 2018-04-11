# Lesson 05 - A NodeJS HTTP Server (Part Two)

## Video Tutorial:
[Lesson 5 - Node.js HTTP Server (Part 2)](https://youtu.be/v98RIQqJYK0)

Previously, we set up and ran our server, but when we sent our first request to the server to load the page, we got stuck loading. To understand why this happens we need to understand the **request - response cycle** that occurs when the user interacts with the server.

## The Request and Response

You will notice in our request handler(`doThisOnRequest()`), that we pass in a **request** and a **response**. What are these?

Well **request** is what we are getting from the server. It is the user's request to get or send something from or to the server. It contains information like the url, the request method, the body of the request (data sent to the server), and more info about the request itself.

 And the **response** is what we on the server side will send back to them in the browser. This could be some text, some JSON data, a HTML or other file, or an error. So how do we do this? Well lets start by talking about why the page got stuck loading.

The page gets stuck loading because the response was never finalized and sent off back to the user. In the **request - response cycle**, we recieved a request from the user, but never send a response back to them. We can finalize and send off the response with `response.end()`. So let's add that to our request handler.
```
console.log('User made a request');
response.end();
```

Now restart the server: `^C` to end the server (if you had it running from the last lesson), then `npm run start` to start it back up. Go to http://localhost:3000, and reload the page. It loads! And back in our terminal, we see the log 'User made a request'. All is good. So what else can we do with request and response? Well let's see!

## Stop! Nodemon Time!

It seems a waste of time to have to stop and re-start our server everytime we make a slight change to our files. So can we fix this? With the power of npm, absolutely!

Nodemon is a npm package that monitors your files, and if it notices you save any new changes, will restart your server for you. You can also restart it manually still with `rs`. So lets install it. Go to your terminal and run `npm install nodemon --save`.

Once that installs, in order to use it, let's go modify our scripts in *package.json*. After our start script, add a new **devstart** script. `"devstart": "nodemon index.js"`. Now stop the server, and run `npm run devstart`. From now on, nodemon will restart our server for us anytime we save changes!

Alright back to request and response.

## Request

The request is full of all sorts of neat stuff, but what we are interested in is the **method** and **url** the user sent our way. The **method** tells us what the user wants. The default method is `GET` and lets us know the user wants some data or file. The **url** tells us what route the user is trying to access. The default is `'/'` which is just the blank slash at the end of the url in the browser. So in our route handler, let's add a test for both these conditions and call the appropriate function as a result.
```
if(request.method == 'GET' && request.url == '/') {
    serveHomePage(response);
}
```

Here we call `serveHomePage()` and pass in our response when the user sends us a `GET` request on the url of `'/'`. Let's define what we will do in this Home Page handler. We will do this with the response object we pass to it.

## Response

We will use response to write the **header** and **body**  of the response before sending it back to the user with `response.end();`. We will write to the **head** of the response with `response.writeHead()`. Will give it the **status code**, `200` (everything is ok), and the **Content-Type**, `"text/html"`. The Header of the response is what tells the web browser what happened on the server, and what to expect coming it's way, among other things. Then we will write to the **body** with `response.write()`, and add some HTML to the body of the response. Lastly we will end and send the response back to the user with `response.end()`.
```
let serveHomePage = (response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Welcome to my home page</h1>");
    response.write("<a href='/nextpage'>Check out the next page</a>");
    response.end();
}
```

Here we send the user a couple bits of html in the form of a `<h1>` element and a `<a>` link to another page. Notice the href in this `<a>` link. Remember the default method is already `GET`. When the user clicks this link, they will be making a new request on the `'/nextpage'` url with the default `GET` method.

## Serving other pages

Lets test for a GET request on this new route. Append this to our current route test.
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

And there we go! Now we can go back and forth between two pages! Marvelous! Go to the browser and test this now for yourself.

## Error Pages

But what if the user asks for a page or route we don't have? Well then we send them their favorite error - A 404 error! To the end of our test for routes, we will add an `else` block that will catch anything the user sent that we don't have a response for.
```
else {
    send404Error(response);
}
```

Now we will define the `send404Error()`. To define the 404 Error handler, notice we change the `"Content-Type"` in this case because we are justing sending them some text, and not html.
```
let send404Error = (response) => {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found.")
    response.end();
}
```

Now try going to http://localhost:3000/randomPage. You will get sent the 404 Error.

## Summary

Congratualations! You have just created your first NodeJS server! Now feel free to configure as many requests and responses that your heart desires and see your server get as big as your want. However, soon you will get tired of manually setting each route and writing each response. There are better ways to handle this, but the best way is to not use Node just by itself. This is what we will talk about next lesson.

## Next Lesson
In the next lesson, we will be learning how to combine NodeJS with Express, an extremely popular and powerful npm package to help build our web apps. See you there!
