// explicit type
let chars: string;
let age: number;
let isLoggedIn: boolean;
// array
let ninjas: string[] = [];
ninjas.push("ryu");
// union type -> mixed types
let mixes: (string | number | boolean)[] = [];
mixes.push(3.1);
mixes.push(true);
mixes.push("ok");
console.log(mixes);
let uid: string | number | boolean;
uid = "12";
uid = 12;
uid = true;
// objects
let ninja: object;
ninja = { name: "ruy", age: 30 };
ninja = [1, "sd", true];
let x: { name: string; age: number; isBelted: boolean };
x = { name: "ruy", age: 23, isBelted: false };
