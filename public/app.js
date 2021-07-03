"use strict";
// const anchor: HTMLAnchorElement
/* const anchor = document.querySelector("a")!;
console.log(anchor);
console.log(anchor.href); */
// const form = document.querySelector("form")!;
// type casing by as key word
// const form: HTMLFormElement
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// input
// const type = document.querySelector(".field>label");
// console.log(type?.textContent);
var select = document.querySelector("#type");
// console.log(select);
var input1 = document.querySelector("#tofrom");
// console.log(input1);
var input2 = document.querySelector("#details");
// console.log(input2);
var input3 = document.querySelector("#amount");
// console.log(input3);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(select.value, input1.value, input2.value, input3.valueAsNumber);
});
