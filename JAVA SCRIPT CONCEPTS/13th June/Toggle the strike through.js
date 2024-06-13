let checkBoxWithLabelContainerElement = document.getElementById('container');

function onCheckboxStatusChange(){
    let checkboxInputElement= document.getElementById('checkbox');
    let checkboxLabelElement= document.getElementById('checkboxLabel');
    checkboxLabelElement.classList.toggle('checked');
   
}

let inputElement= document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
inputElement.classList.add('input-checkbox');

inputElement.onclick=function(){
    onCheckboxStatusChange('checkbox', 'checkboxLabel');
}

checkBoxWithLabelContainerElement.appendChild(inputElement);


let labelElement= document.createElement("label");

labelElement.id='checkboxLabel'
labelElement.setAttribute('for', 'checkbox');
labelElement.classList.add('checkbox-label');
labelElement.textContent= 'I am a label';


checkBoxWithLabelContainerElement.appendChild(labelElement);













// let checkBoxWithLabelContaner= document.getElementById("container")
// function createListItem() {
//     let checkBox = "I am a label";

//     let container = document.createElement("div");
//     container.className = "container";
  
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.name = checkBox;
//     checkbox.id = checkBox;
  
//     let checkboxSpan = document.createElement("span");
//     checkboxSpan.appendChild(checkbox);
  
//     let label = document.createElement("label");
//     label.htmlFor = checkBox;
//     label.textContent = checkBox;
  
//     container.appendChild(checkboxSpan);
//     container.appendChild(label);
//     document.body.appendChild(container);

//     function onCheckboxStatusChange(){
//         checkBoxLabel.classList.toggle("strike-through");
    
//       }
//      checkbox.onclick=function(){
//         onCheckboxStatusChange()
//      }
//      checkBoxWithLabelContaner.appendChild(checkbox);
//   }
  

//   createListItem();
