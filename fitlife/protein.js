let username = localStorage.getItem("username");
let welcome = document.querySelector("#username");
let checkbtn = document.querySelector("#checkbtn");
let backbtn = document.querySelector("#backbtn");
let result = document.querySelector("#result");

welcome.innerHTML = `Welcome To Protein Calculator, ${username}`;

checkbtn.addEventListener("click",() => {
    let weight = Number(localStorage.getItem("userweight"));
    let activity = Number(document.querySelector("#activity").value);

    let protein = weight*activity ;

    result.innerHTML = `Your Daily Protein Requirement is ${Math.floor(protein)} grams`
});

backbtn.addEventListener("click", () => {
    window.location.href = "dashboard.html"
});