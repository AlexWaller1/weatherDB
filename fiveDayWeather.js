// 5 Day Weather Api
console.log("Hello Oa");

// http://openweathermap.org/img/wn/${icon}@2x.png

const fiveDayFormDiv = document.getElementById("five-day-form-div");

const fiveDayWeatherInput = document.getElementById("five-day-weather-input");

const fiveDayWeatherBtn = document.getElementById("five-day-weather-btn");

const weatherInfoDiv = document.getElementById("weather-info-div");

const weatherInfoList = document.getElementById("weather-info-list");

const searchHistoryDiv = document.getElementById("search-history-div");

const cityBtnList = document.getElementById("city-btn-list");

console.log("--------------------------------------------------");
console.log("----------------------------------------------");

let searchCity = [];

let count = 0;

let data1 = localStorage.getItem("search-city");
let data2 = JSON.parse(data1);

let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  searchCity = [];
  count = 0;
} else {
  searchCity = data2;
  count = data4;
}

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
  weatherInfoList.innerHTML = "";
  //.............................................
  const cityName = document.createElement("h2");
  cityName.className = "city-name-header";
  //..............................................
  const firstDivider = document.createElement("h3");
  firstDivider.className = "first-divider";
  firstDivider.innerHTML = "--------------------------------------------";
  //..............................................
  const currentHeader = document.createElement("h3");
  currentHeader.className = "current-header";
  currentHeader.innerHTML = "Current Weather";
  //..............................................
  const currentDate = document.createElement("h3");
  currentDate.className = "city-date-header";
  //.............................................
  const currentTemperature = document.createElement("h3");
  currentDate.className = "current-temperature-header";
  //...................................................
  const currentWeather = document.createElement("h3");
  currentWeather.className = "current-weather-header";
  //...................................................
  const currentImage = document.createElement("img");
  currentImage.className = "current-image";
  //...................................................
  const secondDivider = document.createElement("h3");
  secondDivider.className = "second-divider";
  secondDivider.innerHTML = "------------------------------------------";
  //...................................................
  const fiveDayForecastHeader = document.createElement("h3");
  fiveDayForecastHeader.className = "five-day-forecast-header";
  fiveDayForecastHeader.innerHTML = "Five Day Forecast";
  //...................................................
  const dayOneDate = document.createElement("h3");
  dayOneDate.className = "day-one-date";
  //...................................................
  const dayOneTemp = document.createElement("h3");
  dayOneTemp.className = "day-one-temp";
  //...................................................
  const dayOneWeather = document.createElement("h3");
  dayOneWeather.className = "day-one-weather";
  //...................................................
  const dayOneImage = document.createElement("img");
  dayOneImage.className = "day-one-image";
  //...................................................
  const dayDivider1 = document.createElement("h3");
  dayDivider1.className = "day-divider";
  dayDivider1.innerHTML = "=============";
  //...................................................
  const dayTwoDate = document.createElement("h3");
  dayTwoDate.className = "day-two-date";
  //..................................................
  const dayTwoTemp = document.createElement("h3");
  dayTwoTemp.className = "day-two-temp";
  //..................................................
  const dayTwoWeather = document.createElement("h3");
  dayTwoWeather.className = "day-two-weather";
  //..................................................
  const dayDivider2 = document.createElement("h3");
  dayDivider2.className = "day-divider-2";
  dayDivider2.innerHTML = "==============";
  //..................................................
  const dayThreeDate = document.createElement("h3");
  dayThreeDate.className = "day-three-date";
  //..................................................
  const dayThreeTemp = document.createElement("h3");
  dayThreeTemp.className = "day-three-temp";
  //..................................................
  const dayThreeWeather = document.createElement("h3");
  dayThreeWeather.className = "day-three-weather";
  //..................................................
  const dayDivider3 = document.createElement("h3");
  dayDivider3.className = "day-divider-3";
  dayDivider3.innerHTML = "===============";
  //..................................................
  const dayFourDate = document.createElement("h3");
  dayFourDate.className = "day-four-date";
  //..................................................
  const dayFourTemp = document.createElement("h3");
  dayFourTemp.className = "day-four-temp";
  //..................................................
  const dayFourWeather = document.createElement("h3");
  dayFourWeather.className = "day-four-weather";
  //..................................................
  const dayDivider4 = document.createElement("h3");
  dayDivider4.className = "day-divider-4";
  dayDivider4.innerHTML = "===============";
  //..................................................
  const dayFiveDate = document.createElement("h3");
  dayFiveDate.className = "day-five-date";
  //..................................................
  const dayFiveTemp = document.createElement("h3");
  dayFiveTemp.className = "day-five-temp";
  //..................................................
  const dayFiveWeather = document.createElement("h3");
  dayFiveWeather.className = "day-five-weather";
  //..................................................
  const tempDivider1 = document.createElement("h3");
  tempDivider1.className = "temp-divider";
  tempDivider1.innerHTML = "========================";
  //..................................................
  const tempDivider2 = document.createElement("h3");
  tempDivider2.className = "temp-divider";
  tempDivider2.innerHTML = "========================";

  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${fiveDayWeatherInput.value}&units=imperial&appid=db880e70c46fa251bd18b9c84cfba4cc`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data["city"]["name"]);
      //................................
      cityName.innerHTML = data["city"]["name"];
      weatherInfoList.append(cityName);
      //................................
      weatherInfoList.append(firstDivider);
      //................................
      weatherInfoList.append(currentHeader);
      //................................
      currentDate.innerHTML = data["list"][0]["dt_txt"];
      weatherInfoList.append(currentDate);
      //.....................................
      currentTemperature.innerHTML = `${data["list"][0]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(currentTemperature);
      //........................................
      currentWeather.innerHTML = data["list"][0]["weather"][0]["description"];
      weatherInfoList.append(currentWeather);
      //........................................
      weatherInfoList.append(secondDivider);
      //........................................
      weatherInfoList.append(fiveDayForecastHeader);
      //........................................
      dayOneDate.innerHTML = data["list"][8]["dt_txt"];
      weatherInfoList.append(dayOneDate);
      //........................................
      dayOneTemp.innerHTML = `${data["list"][8]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(dayOneTemp);
      //........................................
      dayOneWeather.innerHTML = data["list"][8]["weather"][0]["description"];
      weatherInfoList.append(dayOneWeather);
      //........................................
      dayOneImage.src = `http://openweathermap.org/img/wn/${data["list"][0]["weather"][0]["icon"]}@4x.png`;
      weatherInfoList.append(dayOneImage);
      //........................................
      weatherInfoList.append(dayDivider1);
      //........................................
      dayTwoDate.innerHTML = data["list"][16]["dt_txt"];
      weatherInfoList.append(dayTwoDate);
      //........................................
      dayTwoTemp.innerHTML = `${data["list"][16]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(dayTwoTemp);
      //........................................
      dayTwoWeather.innerHTML = data["list"][16]["weather"][0]["description"];
      weatherInfoList.append(dayTwoWeather);
      //........................................
      weatherInfoList.append(dayDivider2);
      //........................................
      dayThreeDate.innerHTML = data["list"][24]["dt_txt"];
      weatherInfoList.append(dayThreeDate);
      //........................................
      dayThreeTemp.innerHTML = `${data["list"][24]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(dayThreeTemp);
      //........................................
      dayThreeWeather.innerHTML = data["list"][24]["weather"][0]["description"];
      weatherInfoList.append(dayThreeWeather);
      //........................................
      weatherInfoList.append(dayDivider3);
      //........................................
      dayFourDate.innerHTML = data["list"][32]["dt_txt"];
      weatherInfoList.append(dayFourDate);
      //........................................
      dayFourTemp.innerHTML = `${data["list"][32]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(dayFourTemp);
      //........................................
      dayFourWeather.innerHTML = data["list"][32]["weather"][0]["description"];
      weatherInfoList.append(dayFourWeather);
      //........................................
      weatherInfoList.append(dayDivider4);
      //........................................
      dayFiveDate.innerHTML = data["list"][39]["dt_txt"];
      weatherInfoList.append(dayFiveDate);
      //........................................
      dayFiveTemp.innerHTML = `${data["list"][39]["main"]["temp"]} Degrees Farenheit`;
      weatherInfoList.append(dayFiveTemp);
      //........................................
      dayFiveWeather.innerHTML = data["list"][39]["weather"][0]["description"];
      weatherInfoList.append(dayFiveWeather);
      //........................................
      weatherInfoList.append(tempDivider1);
      //........................................
      weatherInfoList.append(tempDivider2);

      // currentImage.src = data["list"][0]["weather"][0]["icon"];
      // weatherInfoList.append(currentImage);

      //........................................

      //........................................
      let city1 = searchCity.map(c1 => c1.name);
      //................................
      if (!city1.includes(data["city"]["name"])) {
        let newCity = { name: data["city"]["name"], id: count };
        searchCity.push(newCity);
        let JSON1 = JSON.stringify(searchCity);
        localStorage.setItem("search-city", JSON1);
        count++;
        let JSON2 = JSON.stringify(count);
        localStorage.setItem("persist-count", JSON2);
      }
    });
  fiveDayWeatherInput.value = "";
});

function displayCities() {
  searchCity.forEach(function (city1) {
    const cityBtn = document.createElement("h2");
    cityBtn.className = "city-ul-btn";
    cityBtn.innerHTML = city1.name;
    cityBtnList.append(cityBtn);
    //...........................................
    cityBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("header clicked");
    });
  });
}

displayCities();
