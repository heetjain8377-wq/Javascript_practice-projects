let button = document.querySelector("#button");
let count = document.querySelector("#count");

let c =0;

button.addEventListener("click", () => {
    c++ ;
    count.innerText = c ;
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        button.click();
    }

    if(c > 0){
        if(e.key === "Backspace"){
        c--;
        count.innerText = c ;
    }
    }
});
