function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
  }

  var li = document.createElement("li");
  li.className = "task-item";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
      li.classList.toggle("completed", this.checked);
  });

  var taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = taskInput.value;

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = ""; // Clear input field after adding task
}
