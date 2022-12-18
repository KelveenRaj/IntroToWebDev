const hello = document.querySelector(".hello")

//change color function
function SetColor(element, color) {
    element.style.backgroundColor = color;
  }

hello.addEventListener("click", () => {
    SetColor(hello, "red")
})
