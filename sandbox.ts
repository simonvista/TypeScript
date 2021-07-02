// array
let names = ["luigi", "mario", "yoshi"];
names.push("toad"); // only string can be pushed
names[0] = "dave";
let nums = [1, 2, 3, 4];
nums.push(-1);
nums[0] = -1;
let mixes = ["ken", 4, "chun-li", -9, true];
mixes.push("ryu");
mixes.push(10);
mixes.push(false);
mixes[0] = 11;
// object
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};
// once obj is created, we can't add properties
ninja = {
  name: "ryu",
  belt: "white",
  age: 20,
};
