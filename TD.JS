// dark/light mode toggle //
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function addToTable() {
    // Get input values
    const taskName = document.getElementById("task-name").value.trim();
    const taskDetail = document.getElementById("task-details").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value.trim();
    const category = document.getElementById("category").value.trim();
    const assignee = document.getElementById("assignee").value.trim();

    // Validation: make sure there's at least a task name
    if (taskName === "") {
        alert("Please enter a task name!");
        return;
    }

    if (taskDetail === "") {
        alert("Please enter the details of the task...!");
        return;
    }

    // Get the table body
    const tableBody = document.getElementById("task-body");

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells and fill them
    newRow.insertCell(0).textContent = taskName;
    newRow.insertCell(1).textContent = taskDetail || "—";
    newRow.insertCell(2).textContent = dueDate || "—";
    newRow.insertCell(3).textContent = priority || "—";
    newRow.insertCell(4).textContent = category || "—";
    newRow.insertCell(5).textContent = assignee || "—";

    // Clear inputs
    document.getElementById("task-name").value = "";
    document.getElementById("task-details").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("category").value = "";
    document.getElementById("assignee").value = "";
}

// time clock

(function updateTime(){
            const el = document.getElementById('current-time');
            function tick(){ el.textContent = new Date().toLocaleTimeString(); }
            tick();
            setInterval(tick,1000);
})();
