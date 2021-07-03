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
var add = function (a, b, c) {
    if (c === void 0) { c = 2; }
    console.log(a + b);
    console.log(c);
};
add(3, 1.2);
add(3, 1.2, 1.23);
