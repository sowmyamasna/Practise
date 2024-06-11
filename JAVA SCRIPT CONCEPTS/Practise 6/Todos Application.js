function createListItem() {
    let it = document.getElementById("textitem").value;
  
    //   document
    //     .getElementById("addButton")
    //     .addEventListener("click", createListItem);
  
    const container = document.createElement("div");
    container.className = "container";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = it;
    checkbox.id = it;
  
    const checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);
  
    const label = document.createElement("label");
    label.htmlFor = it;
    label.textContent = it;
  
    const icon = document.createElement("i");
    icon.className = "bi bi-trash";
  
    const iconSpan = document.createElement("span");
    iconSpan.appendChild(icon);
  
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.appendChild(label);
    itemDiv.appendChild(iconSpan);
  
    container.appendChild(checkboxSpan);
    container.appendChild(itemDiv);
  
    document.body.appendChild(container);
  }