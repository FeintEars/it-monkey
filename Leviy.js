function calculate(a, b) {
  if (a === 5 && b === 5) {
    throw new Error("Both parameters shouldn't be 5 at the same time");
  }
  if (a > 10 && b <= 100) {
    throw new Error(
      "The first parameter shouldn't be more than 10. The second parameter shouldn't be equal or less than 100",
    );
  }
  if (a > 10) {
    throw new Error("The first parameter shouldn't be more than 10");
  }
  if (b <= 100) {
    throw new Error("The second parameter shouldn't be equal or less than 100");
  }
  return a + b;
}
try {
  let result = calculate(14, 5);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
