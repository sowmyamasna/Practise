function addItems() {

  let inp = document.getElementById("cartItemTextInput").value;
  let para = document.createElement("p");
  para.innerHTML = inp;
  document.getElementById("listupdate").appendChild(para);
}