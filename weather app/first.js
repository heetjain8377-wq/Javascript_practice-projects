let input = document.querySelector("#city");
let btn = document.querySelector("#getbtn");
let result = document.querySelector("#result");
let error = document.querySelector("#error");

let apikey = "5eb7b45997948183303ea7fe1e9dde90";
let apiurl = "https://api.openweathermap.org/data/2.5/weather";

btn.addEventListener("click", () => {

    let city = input.value.trim() ;
    
    if(city === ""){
        alert("Please enter name of city");
        return;
    }
    getweather(city);
});

function getweather(city){
    fetch(`${apiurl}?q=${city}&appid=${apikey}&units=metric`)
    .then(Response => Response.json())
    .then(data => {
        if (data.cod === "404") {
            showError("City not found");
        }else{
            showWeather(data);
        }
    })
    .catch(() => {
        showError("Network error - check internet");
    });
}

function showWeather(data){
    error.innerHTML = "";

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let condition = data.weather[0].main;
    let wind = data.wind.speed;

    result.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Temperature : </strong>${temp}*C</p>
        <p><strong>Humidity :</strong>${humidity}%</p>
        <p><strong>Condition :</strong>${condition}</p>
        <p><strong>Wind Speed :</strong>${wind}km/hr</p>
    `;
}

function showError(msg) {
    result.innerHTML = "";
    error.innerHTML  = msg;
}

document.addEventListener("keydown",(e) => {
    if(e.key === "Enter"){
        btn.click();
    }
})