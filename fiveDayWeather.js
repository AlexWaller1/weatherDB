// 5 Day Weather Api
console.log("Hello Oa");

const fiveDayFormDiv = document.getElementById("five-day-form-div");

const fiveDayWeatherInput = document.getElementById("five-day-weather-input");

const fiveDayWeatherBtn = document.getElementById("five-day-weather-btn");

const weatherInfoDiv = document.getElementById("weather-info-div");

const weatherInfoList = document.getElementById("weather-info-list");

console.log("--------------------------------------------------");
console.log("----------------------------------------------");

let searchHistory = [];

let count = 0;

console.log("---------------------------------------------------");
console.log("----------------------------------------------");

/* 

1. When I search for a city

   Then I am presented with current and future condtions for that city
   and that city is added to the search history.

2. When I view current weather conditions for that city

   Then I am presented with the city name, the date, an icon representation
   of weather condtions, the temperature, the humidity, the wind speed, and 
   the UV index

3. When I view the UV index

   Then I am presented with a color that indicates whether the conditions are
   favorable, moderate, or severe

4. When I view future weather conditions for that city

   Then I am presented with a 5-day forecast that displays the date, icon
   representation of weather conditions, the temperature, and the humidity

5. Then I am again presented with current and future conditions for that city

*/

console.log("-------------------------------------------");
console.log("----------------------------------------");

fiveDayWeatherBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${fiveDayWeatherInput.value}&units=imperial&appid=db880e70c46fa251bd18b9c84cfba4cc`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});
