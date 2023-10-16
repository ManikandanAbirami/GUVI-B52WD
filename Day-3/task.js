const obj1 = { name: "guvi", age: 11, location: "Chennai", designation: "PM" }; // key:value
const keys1 = Object.keys(obj1).sort();
console.log(keys1);

const obj2 = { location: "Chennai", designation: "PM", name: "Mani", age: 32 }; // key:value
const keys2 = Object.keys(obj2).sort();
console.log(keys2);

if (JSON.stringify(keys1) === JSON.stringify(keys2)) {
  console.log("Equal");
} else {
  console.log("Not equal!");
}
