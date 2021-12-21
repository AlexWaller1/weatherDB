console.log("Hello Oa");

const cityInput = document.getElementById("city-input");

const cityBtn = document.getElementById("city-button");
console.log(cityBtn);

const displayHeader = document.getElementById("display-header");

const descriptionHeader = document.getElementById("description-header");

const temperatureHeader = document.getElementById("temperature-header");

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=db880e70c46fa251bd18b9c84cfba4cc`
);
