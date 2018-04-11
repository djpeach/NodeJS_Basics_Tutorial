# Lesson 08 - Using Express Generator with NodeJS (Part Two)

## Video Tutorial:
[Lesson 9 - Express Generator with Node.js (Part 2)](https://youtu.be/3Gl5cObnjV8)

## Run the Server

Now that we have an express app, let's run it in our browser. But first let's create a `devstart` script to give us more help and information as we develop. Go into your *package.json* and add after the existing start script: 
```
"devstart": "DEBUG=express-app:* nodemon ./bin/www"
```

Notice two things here. One, the `DEBUG=express-app:*` part sets some basic debugging errors up to help us when we run into problems, and Two, we use **nodemon**, which we haven't installed yet for this project. So let's do that now. In your working directory, run:
```
npm install nodemon --save
```

Now our devstart script has the module it will need so we can run:
```
npm run devstart
```
And we should see the output simliar to:
```
> express-app@0.0.0 devstart /Users/danyoutube/Tutorials/Lesson Plans/Node_Basics/08 - Using Express-Generator with NodeJS (Part Two)/express_app
> DEBUG=express-app:* nodemon ./bin/www
[nodemon] 1.17.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node ./bin/www`
    express-app:server Listening on port 3000 +0ms
```

This tells us our app is up and running and ready for us to make some changes. 

## Building Our App

Before making changes, let's go see what it looks like right now. So open a browser and go to http://localhost:3000. Pretty simple right? now try http://localhost:3000/users. Also pretty basic. Let's spice things up. 

First, let's try to make things look a little better by incorporating some Bootstrap 4 CSS. If you don't know what bootstrap is, check out their site at http://getbootstrap.com. It is a framwork that pre-defines many CSS classes for us, so we can build great looking websites very quickly by just including their files and using the classes they provide.

## Editing Views - Layout

First, let's add bootstrap to our views. But we don't want to add it to every single page we will have on our site, that is going to get very redundant very fast. So what we can do with a view engine like **pug** is to define a **template** or **layout** page that we then add on to with other pages. That is exactly what the express-generator has created for us, so let's take a look at that now.

Notice how we define our layout and then in the body, expect a block which we call **content**. Now in our index and user's page, we will **extend** layout and define the block **content**. This is how pug puts together the page for us.

You will notice that in the *layout.pug* they, are including a stylesheet already. That is fine, let's add our bootstrap stylesheet right before that one.
```
link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous")
```

In the head, we also need to add some **meta** tags for bootstrap to work correctly. 
```
meta(charset="utf-8")
meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
```

Now we will also need to add the propper jquery and javascript files from bootstrap as well. Let's put these at the bottom of the page. 
```
script(src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous")
script (src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous")
script(src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous")
```

It is important to know that in *.pug* files, indentation is what breaks down to HTML DOM elements, so it is very important to use all tabs (or all spaces, just needs to be uniform), and that each inner element is one indentation inside its outer element.

## Editing View - Index

Now that we have our *layout.pug* setup, lets go edit our index page. Go to *index.pug*, and we are going to add a basic jumbotron from bootstrap announcing our page.
```
block content
  .jumbotron
    h1.text-primary Welcome to Our Express App!
    p.lead Checkout the 
      a(href='/users') Users 
      | page!
```

Notice in pug, to add a class to a HTML element, we use **dot notation**(`div.someClass`). `.container` add the class of **container** to a `<div>`, because it defaults to `<div>`. Adding an id uses hashtag notation (`h1.#someId`). Also notice that to add a link to the `<p>` element, we indent it to signify it belongs to the `<p>`. We then pipe (`|`) on the same indentation some more text that directly belongs to the `<p>` tag as well.

## Editing View - Users

Now to edit our users, first we will make some changes to our server. Go to */routes/users.js* and instead of sending some text, let's render a page with some variables. Replace `res.send('respond with a resource');` with:
```
res.render('users', {users: ["Danny", "Jessica", "Elbert", "Monica", "Johnny"]});
```

Here we are telling the app to use response (`res`) to `render()` a page with some variables that we define in **key: value** pairs. Here we only have one variable(**ourUsers**), and it is set to an array of our users. Now lets go back to */views* and create a page to be rendered. 

First, in */views* create *users.pug*, and in that page, we first need to extend our *layout*, and then defind the block **content**. 
```
extends layout

block content
    // Some content
```

Now let's actually add our content. We are going to use one of the powers of a view engine such as pug to help us do this. We will run a `for` loop over our **ourUser** variable, and list out all the users we have.
```
block content
    .card.col-2.pb-4
        .card-body
            h3.text-primary Our Users:
            ul.list-group
        for user in ourUsers
            li.list-group-item= user
```

## Summary

Go ahead and check the app our in a browser! Congrats on getting this far. You now have a foundation in creating a server with just NodeJS, as well as a server in combination with Express.js. 


## Next Lesson

In the next lesson, we will be explaining and setting up our database - MongoDB. This is the best way of persisting data in NodeJS and fundemental to building real applications. See you there!
