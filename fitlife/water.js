let username = localStorage.getItem("username");
let welcome = document.querySelector("#username");
let checkbtn = document.querySelector("#checkbtn");
let backbtn = document.querySelector("#backbtn");
let result = document.querySelector("#result");

welcome.innerHTML = `Welcome To Water Intake Calculator, ${username}`;

checkbtn.addEventListener("click", () => {
    let weight = Number(localStorage.getItem("userweight"));

    let water = (weight*0.033);

    result.innerHTML = `You Should Drink About ${Math.floor(water)} litres/day`;
});

backbtn.addEventListener("click", () => {
    window.location.href = "dashboard.html"
});