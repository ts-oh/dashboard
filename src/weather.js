import { pageBody } from "./dom.js";

const getWeather = async () => {
  const success = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b0f47b6b3a61483573f6c1e0e803803`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const locationName = data.name;
    const currentTemp = (data.main.temp - 273.15).toFixed(1);
    const humidity = `${data.main.humidity}%`;
    pageBody.weatherInfo.textContent = `${locationName}: ${currentTemp}℃ / ${humidity}`;
  };

  const error = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

const getWeatherData = getWeather();

export { getWeatherData };
