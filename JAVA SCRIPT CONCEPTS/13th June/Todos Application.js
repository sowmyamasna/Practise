let todoItemsContainer= document.getElementById('todoItemsContainer');
let addTodoButtonElement=document.getElementById('addTodoButton');

let todoList = [{
        text : "Learn HTML",
        uniqueNo: 1,
    },
    {
        text : "Learn CSS",
        uniqueNo: 2,
    },
    {
        text : "Learn Java Script",
        uniqueNo: 3,
    }

];
let todosCount=todoList.length;

function onTodoStatusCheck(checkboxId, labelId){

    let getInputElement= document.getElementById(checkboxId);
    let getLabelElement= document.getElementById(labelId);

   getLabelElement.classList.toggle('checked');
}

function removeTodoTask(listId) {
    let listElement=document.getElementById(listId);

    todoItemsContainer.removeChild(listElement);
}

function createAndAppendTodo(todo) {
let checkboxId = 'checkbox' + todo.uniqueNo;
let listId = 'list' + todo.uniqueNo;
let labelId= 'label' + todo.uniqueNo;

let todoElement= document.createElement('li');
todoElement.id=listId;
todoElement.classList.add('todo-item-container', 'd-flex', 'flex-row');

todoItemsContainer.appendChild(todoElement);


let inputElement= document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = checkboxId;

inputElement.onclick=function(){
    onTodoStatusCheck(checkboxId, labelId);
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

deleteIcon.onclick=function(){
    removeTodoTask(listId);
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
        alert ('Provide Input');
        return;
    }

    todosCount=todosCount +1;

    let newTodo= {
        text: userInputValue,
        uniqueNo: todosCount
    };

    
    
        createAndAppendTodo(newTodo);
        userInputElement.value = "";
    }
addTodoButtonElement.onClick= function(){
    onAddTodo();
}






