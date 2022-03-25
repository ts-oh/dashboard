const htmlElements = () => {
  const bgContainer = document.body;

  const header = document.createElement("header");
  bgContainer.appendChild(header);

  const mainContainer = document.createElement("main");
  mainContainer.setAttribute("class", "main");
  bgContainer.appendChild(mainContainer);

  const footer = document.createElement("footer");
  bgContainer.appendChild(footer);

  const authorInfo = document.createElement("p");
  authorInfo.setAttribute("class", "author-info");
  footer.appendChild(authorInfo);

  const gitRepoLink = document.createElement("a");
  gitRepoLink.setAttribute("class", "repo-link");
  gitRepoLink.setAttribute("href", "https://github.com/ts-oh/dashboard");
  footer.appendChild(gitRepoLink);

  const weatherContainer = document.createElement("section");
  weatherContainer.setAttribute("class", "weather-container");
  header.appendChild(weatherContainer);

  const locationError = document.createElement("p");
  locationError.setAttribute("class", "getweather-err");
  weatherContainer.appendChild(locationError);

  const tempContainer = document.createElement("div");
  tempContainer.setAttribute("class", "temp-container");
  weatherContainer.appendChild(tempContainer);

  const tempInfo = document.createElement("p");
  tempInfo.setAttribute("class", "weather-temp");
  tempContainer.appendChild(tempInfo);

  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("id", "weather-icon");
  tempContainer.appendChild(weatherIcon);

  const humidityInfo = document.createElement("p");
  humidityInfo.setAttribute("class", "weather-humidity");
  weatherContainer.appendChild(humidityInfo);

  const cityInfo = document.createElement("p");
  cityInfo.setAttribute("class", "weather-city");
  weatherContainer.appendChild(cityInfo);

  const timeDateContainer = document.createElement("section");
  timeDateContainer.setAttribute("class", "timedate-container");
  header.appendChild(timeDateContainer);

  const dateInfo = document.createElement("p");
  dateInfo.setAttribute("class", "date-info");
  timeDateContainer.appendChild(dateInfo);

  const timeInfo = document.createElement("p");
  timeInfo.setAttribute("class", "time-info");
  timeInfo.setAttribute("src", "");
  timeDateContainer.appendChild(timeInfo);

  const searchContainer = document.createElement("section");
  searchContainer.setAttribute("class", "search-container");
  mainContainer.appendChild(searchContainer);

  const greetUser = document.createElement("p");
  greetUser.setAttribute("class", "greet");
  searchContainer.appendChild(greetUser);

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
    gitRepoLink,
    weatherContainer,
    locationError,
    tempContainer,
    weatherIcon,
    cityInfo,
    tempInfo,
    humidityInfo,
    timeDateContainer,
    timeInfo,
    dateInfo,
    inputArea,
    greetUser,
  };
};

const pageBody = htmlElements();

export { pageBody };
