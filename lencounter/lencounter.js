let counter = document.querySelector(".counter");
let input = document.querySelector("#input");
let wordcount = document.querySelector("#wordcount");

input.addEventListener("input", () => {
    wordcount.innerHTML = input.value.length; 
})