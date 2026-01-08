let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let yourscore = document.querySelector("#yourscore");
let compscore = document.querySelector("#compscore");
let msg = document.querySelector("#msg");
let options = document.querySelector(".options")

let choices = ["rock","paper","scissors"];

let userscore = 0;
let coscore = 0;
compchoice.innerHTML = "";
let randomindex = () => {
    let index = Math.floor(Math.random()*3);
    let compchoice = choices[index];
    return compchoice;
}

rock.addEventListener("click", () => {
    let comp = randomindex();

    if(comp === "rock") {
        msg.innerHTML = "It's a tie";
    }else if(comp === "paper") {
        msg.innerHTML = "Computer wins";
        coscore++ ;
        compscore.innerHTML = coscore ;
    }else if(comp === "scissors") {
        msg.innerHTML = "You win";
        userscore++ ;
        yourscore.innerHTML = userscore;
    }
});

paper.addEventListener("click", () => {
    let comp = randomindex();

    if(comp === "paper") {
        msg.innerHTML = "It's a tie";
    }else if(comp === "scissors") {
        msg.innerHTML = "Computer wins";
        coscore++ ;
        compscore.innerHTML = coscore ;
    }else if(comp === "rock") {
        msg.innerHTML = "You win";
        userscore++ ;
        yourscore.innerHTML = userscore;
    }
});

scissors.addEventListener("click", () => {
    let comp = randomindex();

    if(comp === "scissors") {
        msg.innerHTML = "It's a tie";
    }else if(comp === "rock") {
        msg.innerHTML = "Computer wins";
        coscore++ ;
        compscore.innerHTML = coscore ;
    }else if(comp === "paper") {
        msg.innerHTML = "You win";
        userscore++ ;
        yourscore.innerHTML = userscore;
    }
});

