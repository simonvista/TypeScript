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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Generics -> T is object w/ defined names & types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "yoshi", age: 40 });
console.log(doc1);
console.log(doc1.age, doc1.name, doc1.uid);
const doc3 = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};
const doc4 = {
    uid: 2,
    resourceName: "list",
    data: ["shine", "red", "light"],
};
console.log(doc3, doc4);
