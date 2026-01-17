let input = document.querySelector("#urlinput");
let generate = document.querySelector("#generatebtn");
let qrimage = document.querySelector("#qrimage");
let loader = document.querySelector("#loader");
let welcome = document.querySelector("#welcome");

generate.addEventListener("click", () => {
    loader.style.display = "block";
    welcome.style.display = "none";
    let text = input.value.trim();

    if (text === "") {
        alert("Please Enter URL");
        return;
    }
    
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;
    qrimage.style.display = "block";

    qrimage.style.opacity = "1";
    input.value = "";

});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        generate.click();
    }
});