const htmlElements = () => {
  const bgContainer = document.body;

  const mainContainer = document.querySelector(".main-container");
  bgContainer.appendChild(mainContainer);

  const header = document.createElement("header");
  bgContainer.appendChild(header);

  const footer = document.createElement("footer");
  bgContainer.appendChild(footer);

  const authorInfo = document.createElement("p");
  authorInfo.setAttribute("class", "author-info");
  footer.appendChild(authorInfo);

  const weatherInfo = document.createElement("section");
  weatherInfo.setAttribute("class", "weather-container");
  header.appendChild(weatherInfo);

  const locationError = document.createElement("p");
  locationError.setAttribute("class", "getweather-err");
  weatherInfo.appendChild(locationError);

  const cityInfo = document.createElement("p");
  cityInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(cityInfo);

  const descriptionInfo = document.createElement("p");
  descriptionInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(descriptionInfo);

  const tempInfo = document.createElement("p");
  tempInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(tempInfo);

  const humidityInfo = document.createElement("p");
  humidityInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(humidityInfo);

  const timeDateContainer = document.createElement("section");
  timeDateContainer.setAttribute("class", "timedate-container");
  header.appendChild(timeDateContainer);

  const dateInfo = document.createElement("p");
  dateInfo.setAttribute("class", "date-info");
  timeDateContainer.appendChild(dateInfo);

  const timeInfo = document.createElement("p");
  timeInfo.setAttribute("class", "time-info");
  timeDateContainer.appendChild(timeInfo);

  const greetUser = document.createElement("p");
  greetUser.setAttribute("class", "greet");
  mainContainer.appendChild(greetUser);

  const searchContainer = document.createElement("section");
  searchContainer.setAttribute("class", "search-container");
  mainContainer.appendChild(searchContainer);

  const searchForm = document.createElement("form");
  searchForm.setAttribute("class", "search-form");
  searchForm.setAttribute("name", "search-form");
  searchContainer.appendChild(searchForm);

  const inputArea = document.createElement("input");
  inputArea.setAttribute("name", "search-form");
  inputArea.setAttribute("class", "input-box");
  inputArea.setAttribute("placeholder", "Search with Google");
  inputArea.setAttribute("type", "text");
  searchContainer.appendChild(inputArea);

  return {
    bgContainer,
    mainContainer,
    footer,
    authorInfo,
    weatherInfo,
    locationError,
    cityInfo,
    tempInfo,
    humidityInfo,
    descriptionInfo,
    timeDateContainer,
    timeInfo,
    dateInfo,
    inputArea,
    greetUser,
  };
};

const pageBody = htmlElements();

export { pageBody };
