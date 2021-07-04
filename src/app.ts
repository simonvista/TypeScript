import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // use tutple to refactor code
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Invoice(...values);
  } else {
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
let tup: [string, number, boolean] = ["ryu", 1, true];
tup[0] = "ken";
tup[1] = -1;
tup[2] = false;
let stu: [string, number];
stu = ["chun-li", 23451];
