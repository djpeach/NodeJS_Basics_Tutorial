// console.log('Hello World!');

// ----- Anonymous Functions -----
let myFunc = function() {
    // Do something here
}

// ----- First Class Functions ------
let fullNameFunc = function(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

let printName = function (nameToPrint) {
    console.log(nameToPrint);
}

printName(fullNameFunc('John', 'Smith'));

// ----- Arrow Functions -----
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

// ----- Callbacks -----
let longRunningCheck = (stringData, cb) => {
    setTimeout((stringData) => {
        if(typeof stringData === 'string') {
            let capStringData = String(stringData).toUpperCase();
            return cb(null, capStringData);
        } else {
            return cb(new Error('stringData not a string'));
        }
    }, 4000, stringData);
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

// ----- Promises -----
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
