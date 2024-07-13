let items =  [
      "Apples",
      "Boost Drink",
      "Ice Cream",
      "Tomato Ketchup",
      "Dairy Milk Choclates",
      "Pasta",
    ]
  
  function createList() {
    let ul = document.getElementById("list");
  
    items.forEach(function (items) {
      let li = document.createElement("li");
      li.textContent = items;
      ul.appendChild(li);
    });
  }
  
  createList();