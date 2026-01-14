function submitButton(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");

  searchCity(input.value);
}
let form = document.querySelector("#search-form");

function searchCity(city) {
  let apiKey = "b9b10f3af19o1ba6ec0aed0664cb453t";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(updateWeather);
}

function updateWeather(response) {
  let currentTemp = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  currentTemp.innerHTML = Math.round(temperature);
  let city = document.querySelector("#city-element");
  city.innerHTML = response.data.city;
  let currentCity = document.querySelector("#current-location");
  currentCity.innerHTML = response.data.city;
  city.innerHTML = response.data.city;
  currentCity.innerHTML = response.data.city;
}
form.addEventListener("submit", submitButton);
searchCity("Crewe");
