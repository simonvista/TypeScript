import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // use tutple to refactor code
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// Tuple, fixed type for each position once defined
// array, flexible type for each position once defined
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = -1;
arr = [-1, false, "hi"];
// tuple, change value not type for each positon once defined
let tup = ["ryu", 1, true];
tup[0] = "ken";
tup[1] = -1;
tup[2] = false;
let stu;
stu = ["chun-li", 23451];
