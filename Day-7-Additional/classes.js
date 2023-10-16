class Animal {
  constructor() {
    this.a = 10;
    this.b = 20;
    this.operation = "add";
  }
  set message(operation) {
    this.operation = operation;
  }

  calculation() {
    if (this.operation === "add") {
      console.log(this.a + this.b);
    } else {
      console.log(this.a - this.b);
    }
  }
}

const animal = new Animal();
animal.message = "sub";
animal.calculation();
