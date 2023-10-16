var add = (a, b) => a + b;
console.log(add(10, 20));

// () => expression
// param => expression
// (param) => expression
// (param1, param2) => expression
// () => { statements }
// param => { statements }
// (param1, param2) => { statements }

function add(a, b) {
  return a + b;
}

//var add = (a, b) => a + b;

const fruits = ["apple", "orange", "grapes"];

const numbers = [12, 13, 14, 15, 16, 17, 18]; // + 10
//[22,23,24,25,26,27,28];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].length);
// }

console.log(fruits.map((fruit) => fruit.length));
