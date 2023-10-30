const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when the page loads
loadTasksFromLocalStorage();

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
      // saveTasksToLocalStorage(); // Save tasks to localStorage when checkbox state changes
    });

    deleteBtn.addEventListener("click", function () {
      console.log("delete button clicked!!!", li);
      taskList.removeChild(li);
      // saveTasksToLocalStorage(); // Save tasks to localStorage when a task is deleted
    });

    taskList.appendChild(li);

    saveTasksToLocalStorage(); // Save tasks to localStorage when a new task is added

    taskInput.value = "";
  }
});

// Save tasks to localStorage
function saveTasksToLocalStorage() {
  debugger;
  const tasks = Array.from(taskList.children).map((li) => {
    const textElement = li.querySelector("input[type='checkbox']").nextSibling; // Get the text node next to the checkbox
    return {
      text: textElement.textContent,
      completed: li.querySelector("input[type='checkbox']").checked,
    };
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage when the page loads
function loadTasksFromLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (const task of savedTasks) {
    createTaskElement(task);
  }
}
// Create task elements based on the saved tasks
function createTaskElement(task) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  deleteBtn.innerText = "Delete";

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task.text));
  li.appendChild(deleteBtn);

  if (task.completed) {
    li.classList.add("completed");
  }

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    saveTasksToLocalStorage();
  });

  deleteBtn.addEventListener("click", function () {
    console.log("delete button clicked!!!", li);
    taskList.removeChild(li);
    saveTasksToLocalStorage();
  });

  taskList.appendChild(li);
}
