import { pageBody } from "./dom.js";
import { upperCase } from "./utility.js";

const getWeather = async () => {
  const success = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b0f47b6b3a61483573f6c1e0e803803`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const locationName = `Location: ${data.name}, ${data.sys.country}`;
    const temperature = `Temperature: ${(data.main.temp - 273.15).toFixed(1)}℃`;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const description = data.weather[0].description;
    pageBody.cityInfo.textContent = locationName;
    pageBody.tempInfo.textContent = temperature;
    pageBody.humidityInfo.textContent = humidity;
    pageBody.descriptionInfo.textContent = upperCase(description);
  };

  const error = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

const getWeatherData = getWeather();

export { getWeatherData };
