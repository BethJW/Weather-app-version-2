function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let city = document.querySelector("#city-element");
  if (input.value.trim() !== "") {
    city.innerHTML = input.value;
  } else {
    city.innerHTML = "No location found";
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", signUp);
