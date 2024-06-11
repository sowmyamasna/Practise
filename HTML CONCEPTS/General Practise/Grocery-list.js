let dict = {
    title: "Grocery List",
    list: [
      "Apples",
      "Boost Drink",
      "Ice Cream",
      "Tomato Ketchup",
      "Dairy Milk Choclates",
      "Pasta",
    ],
  };
  
  function createList() {
    document.getElementById("title").textContent = dict.title;
  
    indexList = dict.list;
    let ul = document.getElementById("list");
  
    indexList.forEach(function (dict) {
      let li = document.createElement("li");
      li.textContent = dict;
      ul.appendChild(li);
    });
  }
  
  createList();