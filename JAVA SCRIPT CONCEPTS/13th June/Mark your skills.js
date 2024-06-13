let listItemsContainerElement= document.getElementById('listItemsContainer');

let skillList = [{
        skillName : "HTML",
        uniqueNo: 1,
    },
    {
        skillName : "CSS",
        uniqueNo: 2,
    },
    {
        skillName : "JavaScript",
        uniqueNo: 3,
    }

];
function onCheckboxStatus( labelId){

   
    let checkboxLabelElement= document.getElementById(labelId);
    checkboxLabelElement.classList.toggle('checked');
}

function createAppendSkill(item) {

let checkboxId = 'checkbox' + item.uniqueNo;
let labelId = 'label' + item.uniqueNo;

let listItemElement= document.createElement('li');
listItemElement.classList.add('list-item', 'd-flex', 'flex-row', 'p-1');
listItemsContainerElement.appendChild(listItemElement);


let inputElement= document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = checkboxId;

inputElement.onclick=function(){
    onCheckboxStatus( labelId);
};

listItemElement.appendChild(inputElement);

// let labelContainer= document.createElement('div');
// labelContainer.classList.add('d-flex', 'flex-row');
// listItemElement.appendChild(labelContainer);


let labelElement= document.createElement('label');
labelElement.id = labelId;

labelElement.setAttribute("for", checkboxId);
labelElement.textContent= item.skillName;
labelElement.classList.add('checkbox-label');
listItemElement.appendChild(labelElement);
}


for (let item of skillList) {
    createAppendSkill(item);
}

