// TypeScript doesn't allow you to redefine variable type
// Once type is define, it can't be alerted to another type
var character = "mario";
var age = 30;
var isBlackBelt = false;
character = "luigi";
age = 40;
isBlackBelt = true;
var circ = function (diam) {
    return diam * Math.PI;
};
console.log(circ(2.5));
