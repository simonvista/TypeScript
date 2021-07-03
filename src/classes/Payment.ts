import { HasFormatter } from "../interfaces/HasFormatter.js";
// class
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  // implements interface
  format() {
    return `${this.recipient} owes $${this.amount} for ${this.details}, `;
  }
}
