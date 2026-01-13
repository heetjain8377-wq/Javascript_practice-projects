let change = document.querySelector(".change");
let input = document.querySelector("#input");
let capital = document.querySelector("#capital");
let small = document.querySelector("#small");
let erase = document.querySelector("#erase");

capital.addEventListener("click", () => {
    input.value = input.value.toUpperCase() ;
});

small.addEventListener("click", () => {
    input.value = input.value.toLowerCase() ;
});

erase.addEventListener("click", () => {
    input.value = "" ;
});