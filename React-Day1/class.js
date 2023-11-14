import sum from "./utils.js";

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getID() {
    return this.id;
  }

  getSum(a, b, c) {
    return a + b + c;
  }
}
let emp = new Employee("Guvi", "E001");
console.log(emp.getName());
console.log(emp.getID());
let emp2 = new Employee("Manikandan", "E002");
console.log(emp2.getName());
console.log(emp2.getID());

function foo(...args) {
  console.log(args);
}

foo(100, 200, 300);
let name = "Manikandan";
let age = 32;
console.log("My name is " + name + " and I'm \n" + age + " years old.");
console.log(`My name is ${name} and 
i'm ${age} years old.`);

const mob = ["91", "32431", "234234"];
let country = mob[0];
let op = mob[1];
let sub = mob[2];

let [country1, op1, sub1] = mob;

const person = {
  fName: "Manikandan",
  lName: "Anbalagan",
  ag: 32,
};

let { fName, lName, ag } = person;
let arr1 = [1, 2, 3];
console.log("Module export/import:", sum(...arr1));

var name1 = "John";
var age1 = 23;

var per = {
  name: name1,
  age: age1,
};

console.log("ES5 prop shorthand:", per);

var per1 = {
  name1,
  age1,
};

console.log("ES6 prop shorthand:", per1);
