function addTask() {
  let input = document.getElementById("taskInput");
  let timeInput = document.getElementById("taskTime");

  let taskText = input.value;
  let taskTime = timeInput.value;

  if (taskText === "") return;

  let li = document.createElement("li");

  // Task text + time
  let span = document.createElement("span");
  span.innerText = taskText + " (" + taskTime + ")";

  // Mark complete
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  li.appendChild(span);

  // ✏️ Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    let newTask = prompt("Edit task:", taskText);
    if (newTask) {
      span.innerText = newTask + " (" + taskTime + ")";
      taskText = newTask;
    }
  };

  // ❌ Delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  // Clear inputs
  input.value = "";
  timeInput.value = "";
}
