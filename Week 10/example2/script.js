const heading = document.querySelector(".heading")

function changeText(element) {
    element.innerHTML = "Ooops!";
}

heading.addEventListener("click", () => {
    changeText(heading)
})
