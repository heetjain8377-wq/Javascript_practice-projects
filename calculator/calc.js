let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let clear = document.querySelector("#clear")
let result= document.querySelector("#result");

add.addEventListener("click", () => {
    result.innerHTML = Number(input1.value) + Number(input2.value) ;
});

sub.addEventListener("click", () => {
    result.innerHTML = Number(input1.value) - Number(input2.value) ;
});

mul.addEventListener("click", () => {
    result.innerHTML = Number(input1.value) * Number(input2.value) ;
});

div.addEventListener("click", () => {
    result.innerHTML = Number(input1.value) / Number(input2.value) ;
});

clear.addEventListener("click", () => {
    input1.value = "";
    input2.value = "";
    result.innerHTML = "";
});

