// const anchor: HTMLAnchorElement
/* const anchor = document.querySelector("a")!;
console.log(anchor);
console.log(anchor.href); */
// const form = document.querySelector("form")!;
// type casing by as key word
// const form: HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);
// input
const type = document.querySelector(".field>label");
console.log(type?.textContent);
