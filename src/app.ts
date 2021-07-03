import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let doc1: HasFormatter;
let doc2: HasFormatter;
doc1 = new Invoice("joshi", "web work", 2500);
doc2 = new Payment("mario", "plumbing work", 200);
let docs: HasFormatter[] = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);

const invoice1 = new Invoice("Luigi", "tuition", 121);
console.log(invoice1.format());
const invoice2 = new Invoice("Mario", "Mario Website Design", 221);
console.log(invoice2.format());
let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

// invoice1.client = "yoshi";
invoice2.amount = 400;
console.log(invoice1, invoice2);

console.log(invoices);
invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.amount);
});
