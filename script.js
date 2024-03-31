let searchBtn = document.getElementById("search");
let city = "Ahmedabad";

let allWeatherName = [
  {
    name: "smoke",
    icon: "./Database/app/cloud.png",
  },

  {
    name: "clear sky",
    icon: "./Database/app/clear.png",
  },

  {
    name: "haze",
    icon: "./Database/app/cloud.png",
  },

  {
    name: "overcast clouds",
    icon: "./Database/app/rain.png",
  },

  {
    name: "few clouds",
    icon: "./Database/app/cloud.png",
  },

  {
    name: "broken clouds",
    icon: "./Database/app/cloud.png",
  },

  {
    name: "mist",
    icon: "./Database/app/mist.png",
  },
  {
    name: "scattered clouds",
    icon: "./Database/app/cloud.png",
  },
];

searchBtn.addEventListener("click", async (evt) => {
  let infoBox = document.getElementById("infoBox");
  infoBox.style.visibility = "hidden";
  let inputBox = document.getElementById("inputBox");

  city = inputBox.value;
  let info = await getWeatherInfo();
  printingDetails(info);

  inputBox.value = "";
});

const printingDetails = (info) => {
  console.log(info);
  let p = document.getElementById("notFound");

  p.innerHTML = "";

  try {
    let cityNameShow = document.getElementById("cityNameShow");
    cityNameShow.innerHTML = info.city;

    let imgForWeather = document.getElementById("imgForWeather");
    let flag = false;

    for (let i = 0; i < allWeatherName.length; i++) {
      if (allWeatherName[i].name == info.weather) {
        console.log(allWeatherName[i]);
        imgForWeather.src = allWeatherName[i].icon;
        flag = true;
      }
    }

    if (!flag) {
      imgForWeather.src = "./Database/app/clear.png";
    }

    let infoBox = document.getElementById("infoBox");
    infoBox.style.visibility = "visible";

    let temp = document.getElementById("temp");
    temp.innerHTML = " Temperature : " + info.temp + "&deg;C";

    let humidity = document.getElementById("humidity");
    humidity.innerHTML = " Humidity : " + info.humidity + "%";

    let tempMin = document.getElementById("tempMin");
    tempMin.innerHTML = " Temperature Low : " + info.tempMin + "&deg;C";

    let tempMax = document.getElementById("tempMax");
    tempMax.innerHTML = " Temperature High : " + info.tempMax + "&deg;C";

    let feelslike = document.getElementById("feelslike");
    feelslike.innerHTML = " FeelLike : " + info.feelsLike + "&deg;C";

    let pWthr = document.getElementById("weather");
    pWthr.innerHTML = info.weather;

    let wind = document.getElementById("wind");
    wind.innerHTML = " Wind Speed : " + info.wind.speed + "km/h";
  } catch (e) {
    p.innerHTML = "No Such Place Exists!";
    p.style.color = "red";
    console.log(e);
  }
};

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
      wind: {
        speed: jsonResponse.wind.speed,
        deg: jsonResponse.wind.deg,
      },

      sea_level: jsonResponse.main.sea_level,
    };
    return result;
  } catch (err) {
    throw err;
  }
};

let firstTimePrinting = async () => {
  let data = await getWeatherInfo();
  printingDetails(data);
};

firstTimePrinting();
