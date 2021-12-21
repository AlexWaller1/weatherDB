console.log("Hello Oa");

const cityInput = document.getElementById("city-input");

const cityBtn = document.getElementById("city-button");
console.log(cityBtn);

const displayHeader = document.getElementById("display-header");

const descriptionHeader = document.getElementById("description-paragraph");

const temperatureHeader = document.getElementById("temperature-paragraph");

cityBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=db880e70c46fa251bd18b9c84cfba4cc`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let nameValue = data["name"];
      console.log(nameValue);
      console.log(data["id"]);
      let tempValue = data["id"];
      let descValue = data["weather"][0]["description"];

      displayHeader.innerHTML = nameValue;
      temperatureHeader.innerHTML = data["id"];
      descriptionHeader.innerHTML = descValue;
    })
    .catch(err => console.log("Wrong City Name"));
});
