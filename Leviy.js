function a(number) {
  return {
    amount: number,
    message: `There are ${number} miles left`,
  };
}
// console.log(a(100));

function b(number, city) {
  return {
    city,
    distance: a(number),
  };
}
// console.log(b(200, "New York"));

function c(number, obj) {
  const NewAmount = obj.distance.amount - number;
  return b(NewAmount, obj.city);
}
// console.log(c(10, b(300, "Manchester")));

/* let obj = b(200, 'Manchester');
console.log(obj);

obj = c(10, obj);
console.log(obj);

obj = c(10, obj);
console.log(obj);

obj = c(10, obj);
console.log(obj); */

let obj = b(200, "Manchester");
console.log(obj);

for (let d = 200; d > 0; d -= 10) {
  obj = c(10, obj);
  console.log(obj);
}
