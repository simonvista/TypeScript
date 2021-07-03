"use strict";
// class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + ", ";
    };
    return Invoice;
}());
var invoice1 = new Invoice("Luigi", "tuition", 121);
console.log(invoice1.format());
var invoice2 = new Invoice("Mario", "Mario Website Design", 221);
console.log(invoice2.format());
