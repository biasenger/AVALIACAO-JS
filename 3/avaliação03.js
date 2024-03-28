//Nesse cod utilizei document.getElementsByTagName 
window.onload = function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    
    addTaskButton.onclick = function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
            setupTaskItemClick(li);
        }
    }

    function setupTaskItemClick(li) {
        li.onclick = function () {
            li.classList.toggle("completed");
        }
    }

    const taskItems = document.getElementsByTagName("li");
    for (let i = 0; i < taskItems.length; i++) {
        setupTaskItemClick(taskItems[i]);
    }

}