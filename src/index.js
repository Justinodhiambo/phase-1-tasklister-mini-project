document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const taskDescription = document.getElementById("new-task-description").value;

    const taskList = document.getElementById("tasks"); // Update "tasks" with the actual element ID you want to append tasks to

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    // Optionally, you can clear the input field after adding a task:
    document.getElementById("new-task-description").value = "";
  });
``