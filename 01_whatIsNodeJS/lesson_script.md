# Lesson 01 - What is NodeJS Anyway?

## Definition
According to the website:

**Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.**

Sounds fancy, and powerful, and it is indeed. In essense, NodeJS is a particular JavaScript Interpreter that is built in such a way that it makes a great choice for building web servers and other backends. 

One thing NodeJS does that makes it so great is it runs asynchronously. Or in other words, every request gets to run simultaneously instead of having to wait for the request before it to complete. This is what the website definition means by 'non-blocking.' 

NPM is the Node Package Manager for NodeJS. This is where developers and the community has published literally tons of packages, or add-ons for NodeJS.

Hopefully this clears up what NodeJS is, but if you are still kind of confused, don't worry, keep following along, and you will see visually how it all works together.

## Why NodeJS?

One serious thing to consider when choosing a technology to learn or to work with is, "why should I use this?" or "why shouldn't I use this?" I will explain why I prefer NodeJS over any other web server technology I have used, and let you decide for yourself what to think of it.

NodeJS is great for any sort of backend. You can connect it to a database, query it asynchrounously, and easily and quickly deploy it with many different types of projects. 

Usually used with web in mind, NodeJS handles HTTP requests and serves back either data in the form of JSON, or in conjunction with a package like Express, it can serve back web pages on its own. 

Unlike technologies like Django for Python, or the Spring Framework for Java, NodeJS has an easy learning curve, and NodeJS relies on a huge community that is constantly making NodeJS a better place to code.

I personally prefer NodeJS, and by the end of this series, I hope that you will see why.

## One Backend to Rule Them All

When building any type of serious application whether that be a mobile app with iOS or Android, or a Web App, or a Desktop Tool, you will often want some way of persisting structured data, such as a database. A database is great for storing data for users, items, or whatever you want. To demonstrate how well NodeJS does this, let's imagine yourself in a situation.

Let's say you want to build a random word generator. And you start by making it a Command Line Tool that uses a database to store all the words. Simple enough right? Well after time, you decide that you want to give your generator a nice UI for users, and you settle on a website. 

Well now you may be able to hook up to the same database perhaps, through some maniuplation with PHP, or some other server-side language.  But now perhaps the data being sent to you is not in the form you want. Or for the web you need the entries to have different information. Well that means restructuring an entire database, assuming you used a SQL database. 

Well you finally get that done and build a beautiful UI on the web for you random word gereator, and a friend says, "Hey can you make that an iPhone app?" Well Swift for iOS is completely different than JavaScript or PHP for web, so you have to restructure your data again. Or just copy all the information to a new database, perhaps using the Core Data in Swift itself. 

And on this goes, next an Android app, and so on. What if I told you there was a way to build one backend and every app you could imagine could access it easily, and get uniform data and parse and use it as it pleases? Well that is exactly what NodeJS does.

NodeJS is often used with MongoDB, which is a non-SQL database, which means it is easy to use, query, and change. Using NodeJS, Express, and MongoDB, you can build a RESTful API which will send out information in JSON data, and every language can parse JSON data and make it usable. 

So if you build your random word generator in NodeJS with Express and MongoDB, now your web app, iPhone app, and Android app can all send requrests to the same server, get the same data, and present it in completely different and fitting ways.