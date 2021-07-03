import { Invoice } from "./classes/Invoice.js";
const invoice1 = new Invoice("Luigi", "tuition", 121);
console.log(invoice1.format());
const invoice2 = new Invoice("Mario", "Mario Website Design", 221);
console.log(invoice2.format());
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
// invoice1.client = "yoshi";
invoice2.amount = 400;
console.log(invoice1, invoice2);
console.log(invoices);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount);
});
