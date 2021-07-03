/* let greet = () => {
  console.log("hi");
}; 
greet()*/
let greet: Function;
greet = () => {
  console.log("hi again");
};
greet();
// function w/o return
const add = (a: number, b: number, c: number | string = 2): void => {
  console.log(a + b);
  console.log(c);
};
add(3, 1.2);
add(3, 1.2, 1.23);
// function w/o return
const minus = (a: number, b: number): number => {
  return a - b;
};
let res = minus(1, 2.3);
