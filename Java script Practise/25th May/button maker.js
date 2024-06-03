let customButton=document.getElementById('customButton');


function applyBtn() {
    let bgColor = document.getElementById("bg-color").value;
    let fontColor = document.getElementById("font-color").value;
    let fontSize = document.getElementById("font-size").value;
    let fontWeight = document.getElementById("font-weight").value;
    let padding = document.getElementById("padding").value;
    let borderRadius = document.getElementById("border-radius").value;
   
    
    
    document.getElementById("customButton").style.backgroundColor = bgColor;
    document.getElementById("customButton").style.color = fontColor;
    document.getElementById("customButton").style.fontSize = fontSize;
    document.getElementById("customButton").style.fontWeight = fontWeight;
    document.getElementById("customButton").style.padding = padding;
    document.getElementById("customButton").style.borderRadius = borderRadius;
  }