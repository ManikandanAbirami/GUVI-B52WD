import sum from "./utils.js";

function outerFunction() {
  this.outerValue = "Outer";

  function innerFunction() {
    console.log(this.outerValue);
  }

  const arrFunc = () => {
    console.log(this.outerValue);
  };

  //   innerFunction();
  arrFunc();
}

const obj = new outerFunction();

console.log("Script js:", sum(10, 10, 10));
