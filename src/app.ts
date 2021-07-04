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

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
// Enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource<T> {
  uid: number;
  // resourceType: number;
  resourceType: number;
  data: T;
}
const doc1: Resource<object> = {
  uid: 1,
  // resourceType: 3,
  resourceType: ResourceType.BOOK,
  data: { title: "wind" },
};
const doc2: Resource<object> = {
  uid: 11,
  // resourceType: 4,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};
console.log(doc1, doc2);
