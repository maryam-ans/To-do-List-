
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const ding = document.getElementById("dingSound");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return; 

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);
  input.value = ""; 
}

addBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done"); 
    ding.currentTime = 0; 
    ding.play();           
  }
});
taskList.addEventListener("dblclick", function(e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}


addBtn.addEventListener("click", () => {
  addTask();
  saveTasks();
});

taskList.addEventListener("click", () => saveTasks());
taskList.addEventListener("dblclick", () => saveTasks());


taskList.innerHTML = localStorage.getItem("tasks") || "";
 function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "×";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    saveTasks();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}

