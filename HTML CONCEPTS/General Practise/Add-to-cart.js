let dict = { title: "Add To Cart", heading: "My Cart Items" };

function defaultValue() {
  document.getElementById("title").textContent = dict.title;
  document.getElementById("heading").textContent = dict.heading;
}
defaultValue();

function listValue() {
 
  let inp = document.getElementById("input").value;
  const para = document.createElement("p");
  para.innerHTML = inp;
  Document;
  document.getElementById("listupdate").appendChild(para);
}