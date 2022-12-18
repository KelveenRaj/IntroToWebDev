const button = document.querySelector(".btn")

button.onclick = () => {
    changeColor(button, "blue")
}

function changeColor(element, color){
    element.style.color = color
    if(element.style.color = "blue"){
        element.style.color = "black"
        console.log("im here")
    }
}