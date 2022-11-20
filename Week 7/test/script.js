var button = document.querySelector("button");

var square = document.getElementById("square");

function changeColor() {
  if (square.style.background == "red") {
    square.style.background = "blue";


  } else {
    square.style.background = "red";
  }
}
