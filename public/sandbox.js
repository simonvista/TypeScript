"use strict";
var logDetail = function (id, item) {
    console.log(item + " id: " + id);
};
var greet = function (user) {
    console.log(user.name + " id: " + user.id);
};
var greet1 = function (user) {
    console.log(user.name + " id is: " + user.id);
};
logDetail(101, "Amy");
var user = { id: 11, name: "ruy" };
greet(user);
greet1(user);
