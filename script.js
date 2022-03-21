const htmlElements = () => {
  const bgContainer = document.body;

  const mainContainer = document.querySelector("#main-container");
  bgContainer.appendChild(mainContainer);

  const footer = document.createElement("footer");
  mainContainer.appendChild(footer);

  const authorInfo = document.createElement("section");
  authorInfo.setAttribute("class", "author-info");
  footer.appendChild(authorInfo);

  return Object.freeze({ bgContainer, footer, authorInfo });
};

const pageBody = htmlElements();

const getImage = async () => {
  const response = await fetch(
    " https://apis.scrimba.com/unsplash/photos/random"
  );
  const data = await response.json();
  console.log(data);
  pageBody.bgContainer.style.backgroundImage = `url(${data.urls.full})`;
  pageBody.authorInfo.textContent = `${data.user.name}`;
};

const main = () => {
  pageBody;
  getImage();
};

main();
