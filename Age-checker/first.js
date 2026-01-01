let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
    if (input.value >= 18 && input.value < 60) {
        msg.innerHTML = "You are middle aged";
        msg.style.color = "white";
    }else if (input.value < 18 && input.value > 0) {
        msg.innerHTML = "You are minor";
        msg.style.color = "white";
    }else if (input.value >= 60 && input.value <= 120) {
        msg.innerHTML = "You are senior";
        msg.style.color = "white";
    }else{
        msg.innerHTML = "Something went wrong";
        msg.style.color = "red";
    }
    input.value = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});