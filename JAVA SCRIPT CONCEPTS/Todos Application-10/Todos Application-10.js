let todoItemsContainer= document.getElementById('todoItemsContainer');
let addTodoButton=document.getElementById('addTodoButton');
let saveTodoList = document.getElementById('saveTodoList');


// let todoList = [{
//         text : "Learn HTML",
//         uniqueNo: 1,
//     },
//     {
//         text : "Learn CSS",
//         uniqueNo: 2,
//     },
//     {
//         text : "Learn Java Script",
//         uniqueNo: 3,
//     }

// ];


function getTodoListFromLocalStorage(){

    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null){
        return [];
    } else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount=todoList.length;

saveTodoList.onclick = function(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}




function onTodoStatusChange(checkboxId, labelId){

    let checkboxElement= document.getElementById(checkboxId);
    let LabelElement= document.getElementById(labelId);
    LabelElement.classList.toggle('checked');
}

function onDeleteTodo(todoId) {
    let todoElement=document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
let checkboxId = 'checkbox' + todo.uniqueNo;
let todoId = 'todo' + todo.uniqueNo;
let labelId= 'label' + todo.uniqueNo;

let todoElement= document.createElement('li');
todoElement.id = todoId;
todoElement.classList.add('todo-item-container', 'd-flex', 'flex-row');

todoItemsContainer.appendChild(todoElement);


let inputElement= document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = checkboxId;

inputElement.onclick = function(){
    onTodoStatusChange(checkboxId, labelId);
};  


inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);


let labelContainer= document.createElement('div');
labelContainer.classList.add('label-container', 'd-flex', 'flex-row');
todoElement.appendChild(labelContainer);

let labelElement= document.createElement('label');
labelElement.id=labelId;
labelElement.setAttribute("for", checkboxId);
labelElement.classList.add("checkbox-label");
labelElement.textContent= todo.text;
labelContainer.appendChild(labelElement);

let deleteIconContainer= document.createElement('div');
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);


let deleteIcon= document.createElement('i');
deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

deleteIcon.onclick = function() {
   onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for(let todo of todoList){
    createAndAppendTodo(todo);
}



function onAddTodo(){
    let userInputElement=document.getElementById('todoUserInput');
    let userInputValue= userInputElement.value;

    if (userInputValue === ''){
        alert ('Enter Valid Text');
        return;
    }

    todosCount=todosCount +1;

    let newTodo= {
        text: userInputValue,
        uniqueNo: todosCount,
    };

    todoList.push(newTodo);
    
        createAndAppendTodo(newTodo);
        userInputElement.value = "";
    }
addTodoButton.onclick= function(){
    onAddTodo();
}






