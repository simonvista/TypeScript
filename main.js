"use strict";
exports.__esModule = true;
/* let a: number;
a = 5;
a = 7;
console.log(a);
let b: boolean;
let c: any;
let d: number[] = [1, 2, 3];
let e: any[] = [1, true, "Amy"];
enum Color {
  Red,
  Green,
  Blue,
}
let backgroudColor = Color.Red;
console.log(backgroudColor);
let msg;
msg='asd';
let endsWith=(<string>msg).endsWith('d');
let alterendsWith=(msg as string).endsWith('d'); */
//TS by default is public
var point_1 = require("./point");
var pnt = new point_1.Point(1, 2);
pnt.draw();
// let x = pnt.x;
pnt.x = 11;
pnt.draw();
//console.log(getDistance());
