class Person {
  constructor(firstName, lastName) {
    console.log("This form Person class:", this);
    this._firstName = firstName;
    this._lastName = lastName;
  }
  //For getting the full name Getter method is used
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  //For getting the first name Getter method is used
  get firstName() {
    return this._firstName;
  }
  //For getting the last name Getter method is used
  get lastName() {
    return this._lastName;
  }
  //For setting the full name Setter method is used
  set fullName(name) {
    [this._firstName, this._lastName] = name.split(" ");
  }
  set firstName(name) {}
  set lastName(name) {}
}
let person = new Person("Manikandan", "Anbalagan");
console.log(person.fullName); // get method
person.fullName = "John Jacob"; // set method will be called
console.log(person.firstName);
console.log(person.lastName);

var globalVar = "I am a global variable";

function outerFunction() {
  var outerVar = "I am an outer variable";

  function innerFunction() {
    var innerVar = "I am an inner variable";
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  innerFunction();
  console.log(outerVar);
  console.log(innerVar);
}

outerFunction();
console.log(globalVar);
