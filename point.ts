export class Point {
  /*   private x: number;
    private y: number;
    constructor(x?:number,y?:number){
      this.x=x;
      this.y=y;
    } */
  constructor(private _x?: number, private _y?: number) {}
  get x() {
    return this._x;
  }
  draw(): void {
    console.log("X: " + this._x + ", Y: " + this._y);
  }
  set x(value: number) {
    if (value < 0) {
      throw new Error("X can't be negative!");
    }
    this._x = value;
  }
}
