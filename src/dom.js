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
  weatherInfo.setAttribute("class", "weather-info");
  header.appendChild(weatherInfo);

  return Object.freeze({
    bgContainer,
    mainContainer,
    footer,
    authorInfo,
    weatherInfo,
  });
};

const pageBody = htmlElements();

export { pageBody };
