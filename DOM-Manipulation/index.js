const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
  const taskValue = taskInput.value.trim();

  if (taskValue.length) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const txtNode = document.createTextNode(`${taskValue}`);

    checkbox.type = "checkbox";
    deleteBtn.innerText = "Delete";

    li.appendChild(checkbox);
    li.appendChild(txtNode);
    li.appendChild(deleteBtn);

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    deleteBtn.addEventListener("click", function () {
      console.log("delete button clicked!!!", li);
      taskList.removeChild(li);
    });

    taskList.appendChild(li);

    saveToSessionStorage("task", taskInput.value);
    const task = getFromSessionStorage("task");
    console.log("$$$$$$$$$$$$", task);

    taskInput.value = "";
    // let age = prompt("How old are you?", 100);
    // alert(`You are ${age} years old!!`);

    // let isInstructor = confirm("Are you the instructor?");
    // alert(isInstructor);
  }
});

//setTimeOut(() => { // }, time);

function saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
  setTimeout(() => {
    console.log("Data saved to session storage.");
  }, 4000);
  setInterval(() => {
    console.log("Data saved to session storage.");
  }, 4000);
}

function getFromSessionStorage(key) {
  return sessionStorage.getItem(key);
}
