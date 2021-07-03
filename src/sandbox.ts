/* let greet = () => {
  console.log("hi");
}; 
greet()*/
let greet: Function;
greet = () => {
  console.log("hi again");
};
greet();
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(3, 1.2);
add(3, 1.2, 1.23);
