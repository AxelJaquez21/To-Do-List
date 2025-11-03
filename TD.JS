// DARK / LIGHT MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ADD TASK
function addToTable() {
  const taskName = document.getElementById("task-name").value.trim();
  const details = document.getElementById("task-details").value.trim();
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value.trim();
  const assignee = document.getElementById("assignee").value.trim();

  if (!taskName) {
    alert("Please enter a task name!");
    return;
  }

  const row = document.createElement("tr");

  const priorityColors = { high: "red", medium: "orange", low: "green" };
  const priorityColor = priorityColors[priority] || "green";

  row.innerHTML = `
    <td>${taskName}</td>
    <td>${details}</td>
    <td>${dueDate}</td>
    <td style="color:${priorityColor}; font-weight:bold;">${priority}</td>
    <td>${category}</td>
    <td>${assignee}</td>
    <td>
      <button type="button" class="done-btn">✔</button>
      <button type="button" class="delete-btn">🗑</button>
    </td>
  `;

  document.getElementById("task-body").appendChild(row);

  // Clear inputs (works for input + select)
  document.querySelectorAll(".task-input-row input, .task-input-row select")
          .forEach(i => i.value = "");
}

// HANDLE DONE / DELETE / RESTORE BUTTONS
document.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;

  // DONE
  if (e.target.classList.contains("done-btn")) {
    const completedTable = document.getElementById("completed-body");
    const clonedRow = row.cloneNode(true);
    clonedRow.querySelector(".done-btn").outerHTML = `<button type="button" class="restore-btn">↩</button>`;
    clonedRow.style.textDecoration = "line-through";
    completedTable.appendChild(clonedRow);
    row.remove();
  }

  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    row.remove();
  }

  // RESTORE
  if (e.target.classList.contains("restore-btn")) {
    const taskTable = document.getElementById("task-body");
    const clonedRow = row.cloneNode(true);
    clonedRow.querySelector(".restore-btn").outerHTML = `<button type="button" class="done-btn">✔</button>`;
    clonedRow.style.textDecoration = "none";
    taskTable.appendChild(clonedRow);
    row.remove();
  }
});

// TIME CLOCK
(function updateTime(){
  const el = document.getElementById('current-time');
  function tick(){ el.textContent = new Date().toLocaleTimeString(); }
  tick();
  setInterval(tick, 1000);
})();
