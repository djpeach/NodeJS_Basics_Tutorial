# Lesson 01 - What is NodeJS?

## Video Tutorial:
[Lesson 1 - What Is Node.js?](https://youtu.be/OKXxvKCHLgc)

## Definition

**Acording to _nodejs.org_:**
> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Wow, a lot of words, so what does that mean? Well in essense, NodeJS is a particular JavaScript Interpreter that is built in such a way that it makes a great choice for building webservers and other backends.

One thing in particular that makes NodeJS so great for this is that it runs asynchronously. Or in other words, every call gets processed one right after the other, and does not have to wait for the previous call to finish. This is what the website definition means by _non-blocking I/O._ Other servers do what is called multi-threading in which they run calls on separate threads, so they don't have to wait for the call before it.  But in NodeJS, we don't have to worry about that at all, since it is asynchronous. We will get more into how Node accomplishes this later.

Another great part of using NodeJS is NPM. NPM is the Node Package Manager for NodeJS. This is where developers and the community has published literally tons of packages, or add-ons for NodeJS. Node is great by itself, but gets incredibly powerful very quickly and easily once we start to include packages from NPM. We will use several of these packages to make our lives easier and our apps' capabilites much better.

Hopefully this short introduction helps distinguish what NodeJS really is, but if you are still a bit lost, don't worry. Just keep following along and I will be explaining the different aspects we have mentioned in more detail, as well as how they all fit together.

## Why NodeJS?

One serious thing to consider when choosing a technology to learn or to work with is, "why should I use this?" or "why shouldn't I use this?" I will do my best to explain why I truly believe NodeJS is one of the best tools a developer, especially a web developer, can have.

NodeJS is incredibly easy to use for those already familiar with front-end technologies such as HTML, CSS, and JavaScript. That is because NodeJS is...JS. It is all written in plain JavaScript, and really makes great use of many ECMAScript 6 features. Also, Node give you the ability to easily serve static html, css, and javascript files, as well as using a view engine such as EJS or Pug/Jade to generate html files with data for you. This makes Node quite easy and great for any web developer to pick up quickly.

NodeJS comes with NPM, one of the best package managers for any technology out there. Here is where you can packages that come in the form of web frameworks, database drivers, authentication, validation, and tons more. Anything you could need to build a great Web App can be found in NPM.

NodeJS is not just limited to creating web backends. It is also great for creating RESTful API's. These are backends that will work for any project, whether that be a Web Server, an iPhone/Android app, a Desktop Tool, or others. They do this by storing information in the form of JSON data, with a database such as MongoDB, and then sending that JSON data out on particular routes. This makes getting specific information easy, quick, and uniform across any project or language. Then no matter what project you are doing, you can parse this JSON data and use it in any way you see fit.

## Next Lesson

In the next lesson we will install and setup NodeJS and NPM on your machine. See you there!
