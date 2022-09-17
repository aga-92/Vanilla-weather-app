function showTemperature(response) {
  console.log(response);
  let currentTemperature = document.querySelector("#current-temperature");
  let city = document.querySelector("#city");
  let currentDescription = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  currentDescription.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "1028a4217ab0dffe23c1de638876457e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
