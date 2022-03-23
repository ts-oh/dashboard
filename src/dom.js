const htmlElements = () => {
  const bgContainer = document.body;

  const mainContainer = document.querySelector(".main-container");
  bgContainer.appendChild(mainContainer);

  const header = document.createElement("header");
  bgContainer.appendChild(header);

  const footer = document.createElement("footer");
  bgContainer.appendChild(footer);

  const authorInfo = document.createElement("section");
  authorInfo.setAttribute("class", "author-info");
  footer.appendChild(authorInfo);

  const weatherInfo = document.createElement("section");
  weatherInfo.setAttribute("class", "weather-container");
  header.appendChild(weatherInfo);

  const cityInfo = document.createElement("p");
  cityInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(cityInfo);

  const tempInfo = document.createElement("p");
  tempInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(tempInfo);

  const descriptionInfo = document.createElement("p");
  descriptionInfo.setAttribute("class", "weatherInfo");
  weatherInfo.appendChild(descriptionInfo);

  const humidityInfo = document.createElement("p");
  humidityInfo.setAttribute("class", "weather-info");
  weatherInfo.appendChild(humidityInfo);

  return Object.freeze({
    bgContainer,
    mainContainer,
    footer,
    authorInfo,
    weatherInfo,
    cityInfo,
    tempInfo,
    humidityInfo,
    descriptionInfo,
  });
};

const pageBody = htmlElements();

export { pageBody };
