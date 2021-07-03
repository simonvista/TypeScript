import { HasFormatter } from "../interfaces/HasFormatter";
// class
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  // implements interface
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}, `;
  }
}
