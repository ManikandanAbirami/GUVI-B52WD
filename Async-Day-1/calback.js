const getName = (cb) => {
  let name;
  setTimeout(() => {
    name = "Guvi-B52 Tamil";
    cb(name);
  }, 2000);
};

let firstName = "Manikandan   ";
let lastName = "Anbalagan";
let gradute = "B E CS";

console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    " and i have completed " +
    gradute +
    "."
);
console.log(
  `My name is ${firstName} ${lastName} and i have completed ${gradute}.`
);
const greet = (name) => {
  console.log(`Hello ${name}`);
  //   console.log("Hello:", name);
};

getName(greet);
