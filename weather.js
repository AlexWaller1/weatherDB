console.log("Hello Oa");

const cityInput = document.getElementById("city-input");

const cityBtn = document.getElementById("city-button");
console.log(cityBtn);

const displayHeader = document.getElementById("display-header");

const descriptionHeader = document.getElementById("description-header");

const temperatureHeader = document.getElementById("temperature-header");

console.log("-------------------------------------------");

let searchCities = [];

let count = 0;

let data1 = localStorage.getItem("search-history");
let data2 = JSON.parse(data1);
let data3 = localStorage.getItem("persist-count");
let data4 = JSON.parse(data3);

if (data2 == null) {
  searchCities = [];
  count = 0;
} else {
  searchCities = data2;
  count = data4;
}

console.log("-----------------------------------------");

cityBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=db880e70c46fa251bd18b9c84cfba4cc`
  )
    .then(response => response.json())
    // converting from JSON to JavaScript?
    .then(data => {
      console.log(data);
      let nameValue = data["name"];
      console.log(nameValue);
      console.log(data["id"]);
      let tempValue = data["id"];
      let descValue = data["weather"][0]["description"];

      displayHeader.innerHTML = nameValue;
      temperatureHeader.innerHTML = data["main"]["temp"];
      descriptionHeader.innerHTML = descValue;

      let newCity = { name: nameValue, id: count };

      searchCities.push(newCity);
      console.log(searchCities);

      let JSON1 = JSON.stringify(searchCities);
      localStorage.setItem("search-history", JSON1);

      count++;

      let JSON2 = JSON.stringify(count);
      localStorage.setItem("persist-count", JSON2);
    })
    .catch(err => console.log("Wrong City Name"));

  cityInput.value = "";
});
