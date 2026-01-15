let username = localStorage.getItem("username");
let welcome = document.querySelector("#username");
let checkbtn = document.querySelector("#checkbtn");
let backbtn = document.querySelector("#backbtn");
let result = document.querySelector("#result");

welcome.innerHTML = `Welcome To Calories Calculator, ${username}`;

checkbtn.addEventListener("click",() => {
    let weight = Number(localStorage.getItem("userweight"));
    let height = Number(localStorage.getItem("userheight"));
    let gender = localStorage.getItem("usergender");
    let age = Number(localStorage.getItem("userage"));
    let activity = Number(document.querySelector("#activity").value);

    let BMR ;

    if (gender === "male") {
        BMR = (10*weight)+(6.25*height)-(5*age)+5;
    }else{
        BMR = (10*weight)+(6.25*height)-(5*age)-161;
    }

    console.log(BMR);

    let calories = BMR*activity ;

    result.innerHTML = `Your Daily Calorie Requirement : ${Math.floor(calories)}kcal`
});

backbtn.addEventListener("click", () => {
    window.location.href = "dashboard.html"
});