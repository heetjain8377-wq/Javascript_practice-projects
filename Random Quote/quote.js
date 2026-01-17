const quotes = [
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Hard work beats talent when talent doesn't work hard.",
    "believe you can and you're halfway there.",
    "Don't wait. The time will never be just right.",
    "Precautions are always better than cure.",
    "Waqt ki kimat samjao,waqt aapka jeevan kimtee hoga."
]

const quotetext = document.querySelector("#quote");
const btn = document.querySelector("#quotebtn");

btn.addEventListener("click", () => {
    let randomindex = Math.floor(Math.random()*quotes.length);
    quotetext.innerText = quotes[randomindex];
});