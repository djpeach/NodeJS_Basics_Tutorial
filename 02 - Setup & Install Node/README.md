# Lesson 02 - Setting Up & Install Node02

## Download NodeJS

First we need to download NodeJS to our machine. Open a browser and to to https://nodejs.org/en/download/ and download the LTS (Long Term Support) Version for your Operating System, whatever that may be. Now run through the installer, and it will install NodeJS for you, as well as NPM, which is what we will use to get 'add-ons' for our Node Projects.

Test Node. Check that your download was successful by opening up terminal and running `node --version`.  If this outputs a version, your download was successful. If for some reason, you get an error, check that your download installed the system path for `node` for you.

## Create a Node Project

Now that we have Node and NPM installed, let's put them to use by creating a quick example project. Create a folder, and call it something like `node_example`. **This folder name CANNOT have any spaces!** Now open up your terminal and navigate to that directory.  Here you will run `npm init --yes`. This sets up node in your folder, and creates a file called *package.json*. Let's go through this file.

* > `"name": "node_example"` This is the name of your file or project. This should be the same as the root folder containing _package.json_.
* > `"version": "1.0.0"` This is the version of node that you are running. If this number is different than the number I have here, you may find some things in node have changed, but for the most part will be the same.
* > `"description": ""` This is an optional short description of your project. We have left it blank.
* > `"main": "index.js"` This is what we are setting as the entry point for our app, or the main controller for our app. _index.js_ does not exist yet, but we will create it shortly.
* > `"scripts": { "test": "echo \"Error: no test specified\" && exit 1" }` This is where we will add scripts we want to run with our project. For example, later on, we will add a _start_ script to run our project and start the server.
* > `"keywords": []` This is mainly for developers creating packages for npm itself. These would be the keywords they want their package to be associated with. For example, a popular package is _express_, and it has key words like **web**,**framework**, **restful**, **api**.
* > `"author": ""` Here is where you can put your name. This is just the author for the project, again mainly for packages on npm or published projects, so we won't worry about it here.
* > `"license": "ISC"` This is again for npm packages and/or published projects. It is the license that the project is under which defines the permissions it grants its users. We can also ignore this for now.

Now let's test that everything was set up correctly. Run `npm run`. You will look for the line which should say 'Error: no test specified'. If you see this, you know node and npm are working and set up in your directory.

## Next Lesson

In the next lesson, we will start to use the node enviroment and and see how some basic features work.
