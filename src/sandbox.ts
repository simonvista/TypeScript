// let greet:Function

// fuction signature 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${greeting} ${name}`);
};
greet("ruy", "hi");

// fuction signature 2
let calc: (a: number, b: number, c: string) => number;
calc = (n1: number, n2: number, act: string) => {
  if (act === "+") return n1 + n2;
  else return n1 - n2;
};
console.log(calc(2, 4, "+"));
console.log(calc(2, 4, "-"));

// fuction signature 3
type nameAge = { name: string; age: number };
let logInfo: (obj: nameAge) => void;
logInfo = (ninja: nameAge) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
let user = { name: "Amy", age: 21 };
logInfo(user);
