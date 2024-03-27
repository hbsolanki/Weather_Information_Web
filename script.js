let searchBtn = document.getElementById("search");
let city = "";

searchBtn.addEventListener("click", async (evt) => {
  let infoBox = document.getElementById("infoBox");
  infoBox.style.visibility = "hidden";

  let p = document.getElementById("notFound");
  let inputBox = document.getElementById("inputBox");
  p.innerHTML = "";

  evt.preventDefault();

  try {
    let cityNameShow = document.getElementById("cityNameShow");
    cityNameShow.innerHTML = inputBox.value;

    city = inputBox.value;
    let info = await getWeatherInfo();
    console.log(info);

    let infoBox = document.getElementById("infoBox");
    infoBox.style.visibility = "visible";

    let weather = document.getElementById("weather");

    let temp = document.getElementById("temp");
    temp.innerHTML = "temp : " + info.temp + "&deg;C";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = "humidity : " + info.humidity + "%";
    let tempMin = document.getElementById("tempMin");
    tempMin.innerHTML = "tempMin : " + info.tempMin + "&deg;C";
    let tempMax = document.getElementById("tempMax");
    tempMax.innerHTML = "tempMax : " + info.tempMax + "&deg;C";
    let feelslike = document.getElementById("feelslike");
    feelslike.innerHTML = "FeelLike : " + info.feelsLike + "&deg;C";
  } catch (e) {
    p.innerHTML = "No Such Place Exists!";
    p.style.color = "red";
    console.log(e);
  }
  inputBox.value = "";
});

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5d5f4c289c06be9fa14d96f7a771106f";

let getWeatherInfo = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,

      sea_level: jsonResponse.main.sea_level,
    };
    return result;
  } catch (err) {
    throw err;
  }
};
