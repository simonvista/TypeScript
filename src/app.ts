// const anchor: HTMLAnchorElement
/* const anchor = document.querySelector("a")!;
console.log(anchor);
console.log(anchor.href); */
// const form = document.querySelector("form")!;
// type casing by as key word
// const form: HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
// input
// const type = document.querySelector(".field>label");
// console.log(type?.textContent);
const select = document.querySelector("#type") as HTMLSelectElement;
// console.log(select);
const input1 = document.querySelector("#tofrom") as HTMLInputElement;
// console.log(input1);
const input2 = document.querySelector("#details") as HTMLInputElement;
// console.log(input2);
const input3 = document.querySelector("#amount") as HTMLInputElement;
// console.log(input3);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(select.value, input1.value, input2.value, input3.valueAsNumber);
});
