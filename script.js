let fromInputData = document.getElementById("input");
let todoList = document.getElementById("todos");
let addTaskButton = document.getElementById("TaskButtonAdd");
let deleteTaskButton = document.createElement("button");
let checkBox = document.createElement("input");
checkBox.type = "checkbox";
function addtasks() {
    let todo = fromInputData.value;
    let listTasks = document.createElement("li");
    listTasks.innerText = todo;
    listTasks.style.width = "50vmax";
    todoList.appendChild(listTasks);
    fromInputData.value = "";

    deleteTaskButton.innerText = "Delete";
    listTasks.appendChild(deleteTaskButton);



    listTasks.appendChild(checkBox);


    deleteTaskButton.addEventListener("click", () => {
        listTasks.remove();
    })
    editTask(listTasks);
    checkBox.addEventListener("click", () => {
        if (checkBox.checked) {
            listTasks.style.textDecoration = "line-through";
        } else {
            listTasks.style.textDecoration = "none";
        }
    });

}

function editTask(listTasks) {
    let editTaskButton = document.createElement("button");
    editTaskButton.innerText = "Edit";
    listTasks.appendChild(editTaskButton);
    editTaskButton.addEventListener("click", () => {
        let input = document.createElement("input");
        listTasks.appendChild(input);
        input.addEventListener("dblclick", () => {
            listTasks.innerText = input.value;
            listTasks.appendChild(editTaskButton);
            listTasks.appendChild(deleteTaskButton);
            listTasks.appendChild(checkBox);
        })

    })
}

addTaskButton.addEventListener("click", addtasks);