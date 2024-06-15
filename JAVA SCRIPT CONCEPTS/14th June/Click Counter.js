let getValue = { clickCount: 0 };

function clickCounter() {
  let spanElement = parseInt(document.getElementById("counterValue").innerHTML);

  spanElement = spanElement + 1;
  getValue.clickCount = spanElement;

  document.getElementById("counterValue").innerHTML = spanElement;
}