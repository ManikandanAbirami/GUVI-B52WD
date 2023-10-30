// Color a span/div element content when a user moves the mouse over the element
document.getElementById("change").addEventListener("mouseover", function () {
  this.style.color = "blue";
});

document.getElementById("change").addEventListener("mouseout", function () {
  this.style.color = "black";
});

// Use Prompt to read a value from user and display it in the span element

// let name = prompt("Please enter your name:");
// document.getElementById("display").innerText = name;

//Display the mouse X and Y coordinates in a <span></span> tag when
//you click on a <h1> tag which conatains a paragraph.

document.querySelector("h1").addEventListener("click", function (e) {
  let coordinates = "X: " + e.clientX + ", Y: " + e.clientY;
  document.getElementById("mc").textContent = coordinates;
});

// Write a JavaScript code for character counts in the textarea
document.getElementById("txt").addEventListener("input", function () {
  let count = this.value.trim().length;
  document.getElementById("count").innerText = count;
});

// Convert a given number from decimal to binary

function convertNumber() {
  let num = parseInt(prompt("Enter a decimal number:"));
  let binary = num.toString(2);
  let hexadecimal = num.toString(16).toUpperCase();

  alert("Binary: " + binary + "\nHexadeciaml: " + hexadecimal);
}

// convertNumber();

// Simple Form Validation

document.getElementById("form").addEventListener("submit", function (e) {
  let user = document.getElementById("user").value;
  let pwd = document.getElementById("pwd").value;

  if (user.trim() === "" || pwd.trim() === "") {
    alert("Both username and password are required!");
    e.preventDefault(); // further form will not get submitted!
  }
});

// Full Screen Node Toggle

document
  .getElementById("enterFullScreen")
  .addEventListener("click", function () {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  });

document
  .getElementById("exitFullScreen")
  .addEventListener("click", function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

// Key press Alert and Close Window on Spacebar

document.addEventListener("keydown", function (e) {
  alert("The pressed key is " + e.code);
  if (e.code === "Space") {
    window.close();
  }
  if (e.code === "KeyK") {
    window.open("http://127.0.0.1:5501/DOM-Final/");
  }
});

//Edit content on Hover without any input element!
document.getElementById("edit").addEventListener("mouseover", function () {
  this.contentEditable = true;
});

document.getElementById("edit").addEventListener("mouseout", function () {
  this.contentEditable = false;
});
