let unOrderListContainer= document.getElementById('unOrderListItemsContainer');

let itemList = [{
        itemName : "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName : "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName : "Paratha",
        uniqueNo: 3,
    }

];
function removeOrder(listId){

    let listElement= document.getElementById(listId);
   
    unOrderListContainer.removeChild(listElement);
}

function onAddItemsToOrder(item) {

let buttonId = 'button' + item.uniqueNo;
let listId = 'item' + item.uniqueNo;

let listContainer= document.createElement('li');
listContainer.id=listId;
listContainer.classList.add('list-item-container', 'd-flex', 'flex-row');
listContainer.textContent=item.itemName;
unOrderListContainer.appendChild(listContainer);


let buttonElement= document.createElement('button');
buttonElement.textContent = 'Cancel';
buttonElement.id = buttonId;
buttonElement.classList.add('button', 'btn', 'btn-danger');

buttonElement.onclick=function(){
    removeOrder(listId);
};
listContainer.appendChild(buttonElement);
}


for (let item of itemList) {
    onAddItemsToOrder(item);
}
