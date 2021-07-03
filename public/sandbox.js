"use strict";
/* let greet = () => {
  console.log("hi");
};
greet()*/
var greet;
greet = function () {
    console.log("hi again");
};
greet();
// function w/o return
var add = function (a, b, c) {
    if (c === void 0) { c = 2; }
    console.log(a + b);
    console.log(c);
};
add(3, 1.2);
add(3, 1.2, 1.23);
// function w/o return
var minus = function (a, b) {
    return a - b;
};
var res = minus(1, 2.3);
