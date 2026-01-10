let input = document.querySelector("#input");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
        if (input.type === "password") {
                input.type = "text";
                button.innerHTML = "hide password";
        } else {
                input.type = "password";
                button.innerHTML = "show password";
        }
});