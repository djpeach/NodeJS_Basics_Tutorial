# Lesson 03 - Working in the NodeJS Enviroment

## Build our Node Project

Go ahead and create a new folder for this lesson and call it something like _node_programming_. Now do the same as last lesson and go to this folder in terminal and run `npm init --yes`.

Let's go into `package.json` and create a run script. Right after the script line for test, add `"start": "node index.js"`. This creates the start script we will use to run our project. Next we need to create the *index.js* file we just told Node to look for when we run "start". Go ahead and create a file and call it *index.js*, open this in a text editor, and let's get started.

Start by typing in a simple command to print out 'Hello World!' in the honor of tradition: 
```
console.log('Hello World!');
```

Now we can run our _index.js_ file by going to our root working directory (*node_programming/*) in terminal and running `npm run start`. You should see NodeJS find the file, and execute it, and then see the output: `Hello World!`. This is how we write and run files with NodeJS. 

## NodeJS Prerequisites

Now I will run through some things that we will be using in NodeJS. If you are used to JavaScript, these should be familiar to you. If any of them are not, I recommend finding tutorials explaining them in depth before moving on. Alright, here we go!

### Anonymous Functions & Function Expressions
```
let myFunc = function() {
    // Do something here
}

// A function that gets passed another function (See First Class Functions below)
let funcThatNeedsFunc = function(text, paramFunc) {
    if(someConditionIsMet) {
        // Call paramFunc
        let capText = String(text).toUpperCase();
        paramFunc(capText);
    }
}

funcThatNeedsFunc("some text", function(transformedText) {
    console.log(transformedText);
}
```

### First Class Functions

``` 
let fullNameFunc = function(firstName, lastName) {
    let fullName = firstName + ' ' +   lastName;
    return fullName;
}

let printName = function (nameToPrint) {
    console.log(nameToPrint);
}

printName(fullNameFunc('John', 'Smith'));
```

### Arrow Functions

```
let doAddition = (number1, number2) => {
    return number1 + number2;
}

console.log(doAddition(2, 3));

let Johnny = {
    name: "Johnny",
    printMyselfFunc: function() {
        console.log(this); // Prints out Johhny Object
    }, 
    printMyselfArrFunc: () => {
        console.log(this); // Prints out blank global Object
    }
}

Johnny.printMyselfFunc();
Johnny.printMyselfArrFunc();
```
### Callbacks
```
let longRunningCheck = (stringData, cb) => {
    setTimeout((stringData) => {
        if(typeof stringData === 'string') {
            let capStringData = String(stringData).toUpperCase();
            return cb(null, capStringData);
        } else {
            return cb(new Error('stringData not a string'));
        }
    }, 3000, stringData);
}

longRunningCheck("Johhny is my name", (err, newStringData) => {
    if(err) {
        console.log(err);
    } else if (!newStringData) {
        let err = new Error('newStringData was not returned');
    } else {
        console.log(newStringData);
    }
})
```

### Promises
```
let longPromisedCheck = (stringData) => {
    return new Promise((resolve, reject) => {
        setTimeout((stringData) => {
            if(typeof stringData === 'string') {
                let capStringData = String(stringData).toUpperCase();
                resolve(capStringData);
            } else {
                reject('stringData is not a string');
            }
        }, 2000, stringData);
    })
}

longPromisedCheck("Johnny is my name").then((newStringData) => {
    console.log(newStringData);
}).catch((err) => {
    console.error(err);
})
```

If any of these gave you pause, please do make an effort to learn them first before moving on.

## Next Lesson 

In the next lesson we will be creating our first NodeJS server, and you will see how to handle and respond to HTTP requests with Node. See you there!



    


