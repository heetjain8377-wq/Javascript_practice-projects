let apikey = "lus1f9u7DIxzLHB23zgL9naajv-YQuBYJhB3lWSr-ao";
let input = document.querySelector("#input");
let search = document.querySelector("#search");
let resultbox = document.querySelector("#resultbox");
let container = document.querySelector(".container");

search.addEventListener("click", () => {
    let query = input.value.trim();
    if (query === "") {
        alert("Enter Something!")
        return;
    }

    resultbox.innerHTML = "Loading ..."

    fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${apikey}`)
    .then(Response => Response.json())
    .then(data => {
        resultbox.innerHTML = "";

        if (data.results.length === 0) {
            resultbox.innerHTML = "No Image Found!";
            return;
        }

        data.results.forEach(photo => {
            let img = document.createElement("img");
            img.src = photo.urls.small ;
            img.alt = photo.alt_description || "image";
            img.classList.add("img-card");
            resultbox.appendChild(img);
        });
    })
    .catch(() => {
        resultbox.innerHTML = "Error Loading Images!"
    });
    input.value = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        search.click();
    }
});