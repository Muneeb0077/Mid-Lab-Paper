let fromInputData = document.getElementById("input");
let todoList = document.getElementById("todos");
let addTaskButton = document.getElementById("TaskButtonAdd");
let deleteTaskButton = document.createElement("button");     
function addtasks (){
            let todo = fromInputData.value;
            let listTasks = document.createElement("li"); 
            listTasks.innerText = todo;
            listTasks.style.width = "50vmax";
            todoList.appendChild(listTasks);
            fromInputData.value = "";
            
            deleteTaskButton.innerText = "Delete";
            listTasks.appendChild(deleteTaskButton);
        
        deleteTaskButton.addEventListener("click", ()=>{
            listTasks.remove();
        })
        editTask(listTasks);
}

function editTask(listTasks){
    let editTaskButton = document.createElement("button");
    editTaskButton.innerText = "Edit";
    listTasks.appendChild(editTaskButton);
    editTaskButton.addEventListener("click", ()=>{
        let input = document.createElement("input");
        listTasks.appendChild(input);
        input.addEventListener("dblclick", ()=>{
            listTasks.innerText= input.value;
            listTasks.appendChild(editTaskButton);
            listTasks.appendChild(deleteTaskButton);
        })
        
    })
}

addTaskButton.addEventListener("click", addtasks);