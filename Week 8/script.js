const collection = document.getElementsByTagName("p")

console.log(collection)


for ( let i = 0; i < 3; i ++){
    collection[i].innerHTML = "Hello World"
}
