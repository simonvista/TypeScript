// dynamic type -> any key word
// ba careful when use any
let age: any = 34;
age = false;
age = "sd";
age = { name: "amy", age: 21 };
let mixes: any[] = [];
mixes.push(12);
mixes.push("df");
mixes.push(true);
console.log(mixes);
let ninja: { name: any; age: any };
ninja = { name: "ddf", age: 12 };
