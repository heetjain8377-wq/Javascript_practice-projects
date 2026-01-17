let seconds = 0;
let timer = null;

const display = document.querySelector("#display");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

start.addEventListener("click", () => {
    if(timer !== null)return;

    timer = setInterval(() => {
        seconds++ ;

        let minutes = Math.floor(seconds/60);
        let remainingseconds = seconds%60;

        if(minutes < 10)minutes = "0"+minutes;
        if(remainingseconds < 10)remainingseconds = "0"+remainingseconds;

        display.innerHTML = minutes + ":" + remainingseconds;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    display.innerHTML = "00:00" ;
});