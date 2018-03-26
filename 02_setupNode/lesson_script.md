# Lesson 02 - Setting Up Node

## Download Node

Go to https://nodejs.org/en/download/ and use the installer. There are other ways to install Node, but we will stick to the installer since it will be about the same on all operating systems.

Run through the installer and it will install NodeJS, as well as npm, which is what we use to get add-ons for Node.

Now lets check the download by running `node --version`

## Add Node to Directory

Now that we have Node and npm installed, lets put them to use with a quick example.

Create a new folder, and call it `node_example`. Now navigate to that directory in your terminal. Add node to this by running `npm init`. And enter through the options. This sets up your enviroment and a record/control file called `package.json`. 

Now let's test that it set up correctly. Run `npm run`. You will look for the line which should say 'Error: no test specified'. If you see this, you know node and npm are working and set up in your directory.

## Run Node

Let's go into `package.json` and create a run script. Right after the script line for test, add `"start": "node index.js"`. This create the run script. Now we need to create that `index.js` we want node to run for us.

Go ahead and create a file and call it `index.js`, open this in a text editor, and let's get started.

Follow along with the code I write.

## Test the Server

Open a web browser and go to http://localhost:3000 

You should see Hello World. Congrats, you made your first server.

## Next Lesson

In the next lesson we will build out our server to accept requests on some routes and send back a response to the user with express.
