"use strict";
// let greet:Function
// fuction signature 1
var greet;
greet = function (name, greeting) {
    console.log(greeting + " " + name);
};
greet("ruy", "hi");
// fuction signature 2
var calc;
calc = function (n1, n2, act) {
    if (act === "+")
        return n1 + n2;
    else
        return n1 - n2;
};
console.log(calc(2, 4, "+"));
console.log(calc(2, 4, "-"));
// fuction signature 3
var logInfo;
logInfo = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
var user = { name: "Amy", age: 21 };
logInfo(user);
