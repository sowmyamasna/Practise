function createListItem() {
    let checkBox = "Click Me!";

    let container = document.createElement("div");
    container.className = "container";
  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = checkBox;
    checkbox.id = checkBox;
  
    let checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);
  
    let label = document.createElement("label");
    label.htmlFor = checkBox;
    label.textContent = checkBox;
  
    container.appendChild(checkboxSpan);
    container.appendChild(label);
    document.body.appendChild(container);
  }
  
  createListItem();