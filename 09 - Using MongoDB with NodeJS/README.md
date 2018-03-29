# Lesson 09 - Using MongoDB with NodeJS

## Definition - What is MongoDB Anyway?

> MongoDB is a noSQL document-driven database that scales and queries quickly and easily.

The great thing about MongoDB is the noSQL, document-driven aspect of it. noSQL means that it does not use SQL to function or program with. It uses common programming syntaxes, and can use drivers to be used with many languages. With NodeJS, we will be using the Mongoose Driver which will enable us to define and use MongoDB documents just like normal JavaScript JSON objects.

## Install and Setup

This will be different depending what operating system you are on. If you have any questions or issues, check out the guides at https://docs.mongodb.com/manual/administration/install-community/. 

#### For Windows: 
> Download the latest stable release for your system at https://www.mongodb.com/download-center It will be under the tab for 'Community Edition'. Once that downloads go ahead and run the *.msi* file. This process will guide you through the installation. You can also optionally download MongoDB Compass, do this, as we will be using it later on to view our database.

#### For Mac:
> To manually install MongoDB go to the link above for a guide. We will use Homebrew as it is much easier. If you do not already have Homebrew, install it here: https://brew.sh. Now run `brew update` and then `brew update` and then `brew install mongodb`. Once that finishes, run `cd ../../data && sudo mkdir db && sudo chmod a+rw db/ && cd` to create your data file for mongodb, and give it read and write permissions.

Also go to https://www.mongodb.com/download-center, go to the 'Compass' tab, and download the latest version of the MongoDB Compass tool. Run the downloaded installer and add to your Applications. We will be using this to view our database later on.

#### For Linux: 
> Go to https://docs.mongodb.com/manual/administration/install-community/, and choose your linux distribution, then follow the instructions. After that, install the MongoDB Compass as well. We will be using Compass later to view our database.

## Run MongoDB:

Now from your terminal, run `mongod`, at this point, you should see some lines execute, and then it end with something similar to `2018-03-28T20:46:29.905-0400 I NETWORK  [initandlisten] waiting for connections on port 27017`. If you see then then congratulations. You have mongodb up and runnning. Now let's get on Compass and add some documents.

## Adding documents with Compass

Find Compass and open it up. Make sure you have your mongodb instance is still running, or run it again with `mongod`, and then click connect. (The defaults should be fine).

You will see two current databases already, admin and local. We will ignore these and create our own database. Click on 'Create Database', and enter the name of your database and the name of a 'collection' in the database. I will call my database *test* and add a collection of *users*. 

Now click on this newly created database, and then click to open the collection. You will see here that we have no documents, or objects in our collection. Let's change that. 

Click on 'Insert Document'. Then add two key: value pairs.
```
"first_name": "Johnny",
"last_name": "Stevens"
```
Then click 'Insert'

There you go! Now we have our database, we have it running, and we have a collection of users with our first user inside of it. 

## Next Lesson 

In the next lesson, we will move away from straight MongoDB and get back into NodeJS. We will interact with MongoDB through the Mongoose driver module from npm. See you there!

