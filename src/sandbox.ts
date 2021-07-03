const logDetail = (id: string | number, item: string) => {
  console.log(`${item} id: ${id}`);
};
const greet = (user: { id: string | number; name: string }) => {
  console.log(`${user.name} id: ${user.id}`);
};
