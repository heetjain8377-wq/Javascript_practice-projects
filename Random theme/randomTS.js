let black = document.querySelector(".black");
let white = document.querySelector(".white");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let pink = document.querySelector(".pink");
let violet = document.querySelector(".violet");
let aquamarine = document.querySelector(".aquamarine");
let button = document.querySelector("button");

const themes = ["black","white","blue","yellow","green","pink","violet","aquamarine"];

button.addEventListener("click", () => {
    let random = Math.floor(Math.random()*themes.length);
    document.body.className = themes[random];
    button.innerText = themes[random] ;
});