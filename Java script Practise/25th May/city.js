reset();

function show(id) {
  if (id === "b1") {
    reset();
    acts();
    document.getElementById("p1").style.display = "block";
    document.getElementById("b1").className = "active";
  } else if (id === "b2") {
    reset();
    acts();
    document.getElementById("p2").style.display = "block";
    document.getElementById("b2").className = "active";
  } else if (id === "b3") {
    reset();
    acts();
    document.getElementById("p3").style.display = "block";
    document.getElementById("b3").className = "active";
  }
}

function reset() {
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "none";
  document.getElementById("p3").style.display = "none";
}

function acts() {
  document.getElementById("b1").className = "";
  document.getElementById("b2").className = "";
  document.getElementById("b3").className = "";
}