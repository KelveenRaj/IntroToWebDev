//Original text is the current text in the p tag
const originalText = document.getElementById("text").innerHTML;
const dogBtn = document.querySelector(".dog");
const catBtn = document.querySelector(".cat");

// assign original text into temporary text variable
let text = originalText;

dogBtn.addEventListener("click", () => {

  //using the temporary text, replace all dog to cat
  const newText = text.replaceAll("dog", "cat");``

  //use the newtext to overwrite the p element
  const changedData = (document.getElementById("text").innerHTML = newText);

  console.log(changedData);
});

catBtn.addEventListener("click", () => {

  //using the temporary text, replace all dog to cat
  const newText = text.replaceAll("cat", "dog");

  //use the newtext to overwrite the p element
  const changedData = (document.getElementById("text").innerHTML = newText);

  console.log(changedData);
});
