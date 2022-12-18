const input = document.querySelector(".input")

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.replaceAll("hello", "hi");
}

input.addEventListener("change", () => {
    upperCase()
})
