display();

var a = true;
if (a) {
  function display() {
    console.log("A it is!");
  }
} else {
  function display() {
    console.log("B it is!");
  }
}
