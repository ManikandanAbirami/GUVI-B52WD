let a = [10, 20, 30, 40, 50];
let inHand = 0;
let result = a.reduce(function (x, y) {
  //   console.log("X:", x, " Y:", y);
  return x + y;
});
// console.log(result / a.length);

const fruits = ["apple", "orange", "banana", "apple", "apple", "orange"];
const fruitCounts = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCounts);
//arr.reduce(func, value)

let obj = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};
