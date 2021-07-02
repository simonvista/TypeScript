// TypeScript doesn't allow you to redefine variable type
// Once type is define, it can't be alerted to another type
let character = "mario";
let age = 30;
let isBlackBelt = false;

character = "luigi";
age = 40;
isBlackBelt = true;
const circ = (diam: number) => {
  return diam * Math.PI;
};
console.log(circ(2.5));
