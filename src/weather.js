import pageBody from './dom.js'

const getWeather = async () => {
  const success = async (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a797c8434727393a30ffae596b0b1b1e`

    const response = await fetch(apiUrl)
    const data = await response.json()
    const locationName = `🗺 ${data.name}, ${data.sys.country}`
    const temperature = `🌡 ${(data.main.temp - 273.15).toFixed(1)}℃`
    const humidity = `💦 ${data.main.humidity}%`
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    pageBody.weatherIcon.src = iconUrl
    pageBody.cityInfo.textContent = locationName
    pageBody.tempInfo.textContent = temperature
    pageBody.humidityInfo.textContent = humidity
  }

  const error = (err) => {
    err
      ? (pageBody.locationError.textContent = `⛑ Weather Fetch Error: Please Allow Location Permission`)
      : 'location error'
  }

  navigator.geolocation.getCurrentPosition(success, error)
}

const getWeatherData = getWeather()

export default getWeatherData
