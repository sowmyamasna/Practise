let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

document.getElementById("no1").innerHTML = a;
document.getElementById("no2").innerHTML = b;

let c = a + b;
console.log(c, typeof c);
function checkres() {
  let r = parseInt(document.getElementById("res").value);
  if (c === r) {
    document.getElementById("msg").innerHTML = "Correct";
  } else {
    document.getElementById("msg").innerHTML = "Wrong, Please Try Again";
  }
}

function restart() {
  window.location.reload();
}