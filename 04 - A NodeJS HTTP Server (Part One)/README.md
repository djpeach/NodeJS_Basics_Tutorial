# Lesson 04 - A NodeJS HTTP Server

## Video Tutorial:
[Lesson 4 - Node.js HTTP Server (Part 1)](https://youtu.be/6SA9NoQlt30)

In this lesson we are going to create your first server. Let's do it.

## Setup

Let's get setup like we always do.
* `mkdir node_server` - Create Project Folder
* `cd node_server`    - Go into the folder
* `npm init --yes`    - Initialize Node
* `touch index.js`    - Create index.js
* `code .`            - Open the project in a text editor(for me `code` opens VSCode)
* In *package.json*'s scripts: `"start": "node index.js"`   - Start script for the server.

## Build the Server

Now it is time to build the server. Let's start by importing the http module for Node. This module will allow us to accept and handle http requests from the server and send a response back to it, as well as letting us create the server itself.
```
const http = require('http');
```

Next we will use that http variable to create the server. `http.createServer()` takes a function to execute on every request. We will pass that function in and define it in a second. For now just add this below the http import.
```
const server = http.createServer(doThisOnRequest);
```

Now our server is expecting a function called _doThisOnRequest_. We could build this function in the `createServer()` using an anonymous function, but we will do it separately for now to make it clearer. For now we will just log out that a request happened.
```
let doThisOnRequest = (request, response) => {
    console.log('User made a request');
}
```

## Run the Server

Next we have to 'turn on' the server, aka set it to listen on a ip address and port. We will use our local ip, 127.0.0.1. This is your localhost. And we will use port 3000. So let's do it.
```
server.listen(3000, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:3000/`);
});
```

Now lets go to our terminal, and in the working directory (*node_server*) we will run `npm run start`. 

Now we can open our browser and go to http://localhost:3000/ to see the site. 

Notice that the page gets stuck loading. Why is this? Well we will talk about that in the next lesson. 

## Next Lesson

In the next lesson we will talk about the request and response and how we use them to control the server routing. See you there!
