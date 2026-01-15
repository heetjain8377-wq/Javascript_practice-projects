let checkbtn = document.querySelector("#checkbtn");
let result = document.querySelector("#result");
let user = JSON.parse(localStorage.getItem("Userdata"));
let height = localStorage.getItem("userheight");
let weight = localStorage.getItem("userweight");
let username = localStorage.getItem("username");
let category = document.querySelector("#result-category");
let backbtn = document.querySelector("#backbtn");
let welcome = document.querySelector("#username")
let heightmeter = height/100 ;

checkbtn.addEventListener("click", () => {
    console.log(weight);
    console.log(height);
    let BMI = result.innerHTML = weight/heightmeter**2 ;

    if (BMI <18.5) {
        category.innerHTML = "Under Weight";
        category.style.color = "#ff9d00";
    }else if (BMI >= 18.5 && BMI <= 24.9) {
        category.innerHTML = "Normal";
        category.style.color = "#28a745";
    }else if (BMI >= 25 && BMI <= 29.9) {
        category.innerHTML = "Over Weight";
        category.style.color = "#ff8000";
    }else{
        category.innerHTML = "Obese";
        category.style.color = "#ff0000";
    }

});

backbtn.addEventListener("click", () => {
    window.location.href = "dashboard.html"
});

welcome.innerHTML = `Welcome To BMI Calculator, ${username}`;