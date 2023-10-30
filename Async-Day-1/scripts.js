console.log("I have finished TASK A to mix all the ingredients of the cake!");
setTimeout(() => {
  console.log(
    "I have finished TASK B to take the cake in microwave for 30 mins!"
  );
}, 5000);
console.log("I have finished TASK C to prepare cold coffee!");

//setTimeout(param1, param2);

//param1 - () => {}
//param2 - 5000

function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// console.log("SUM:", sum(10, 10));
// console.log("Multiply:", multiply(10, 10));

function getResults(x, y, operate) {
  x = x * 10;
  y = y * 10;
  return operate(x, y); // return sum(2, 3);
}

console.log("sum:", getResults(2, 3, sum));
console.log("multiply:", getResults(2, 3, multiply));
