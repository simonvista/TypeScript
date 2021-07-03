// class
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}, `;
  }
}
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
