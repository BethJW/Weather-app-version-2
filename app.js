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
  let humidity = document.querySelector("#humidity");
  let city = document.querySelector("#city-element");
  let currentCity = document.querySelector("#current-location");
  let windSpeed = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  currentTemp.innerHTML = Math.round(temperature);
  city.innerHTML = response.data.city;
  currentCity.innerHTML = response.data.city;
  city.innerHTML = response.data.city;
  humidity.innerHTML = ` ${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  let currentDate = document.querySelector("#current-date");
  time.innerHTML = formatTime(date);
  currentDate.innerHTML = formatDate(date);
  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;
}

function formatTime(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
}
function formatDate(date) {
  let day = date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let writtenDay = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "Decemeber",
  ];
  let month = months[date.getMonth()];
  return `${writtenDay} ${day} ${month}`;
}
form.addEventListener("submit", submitButton);
searchCity("Crewe");
