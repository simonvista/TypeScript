type strOrNum = string | number;
type nameIdObj = { id: strOrNum; name: string };
const logDetail = (id: strOrNum, item: string) => {
  console.log(`${item} id: ${id}`);
};
const greet = (user: nameIdObj) => {
  console.log(`${user.name} id: ${user.id}`);
};
const greet1 = (user: nameIdObj) => {
  console.log(`${user.name} id is: ${user.id}`);
};
logDetail(101, "Amy");
let user = { id: 11, name: "ruy" };
greet(user);
greet1(user);
