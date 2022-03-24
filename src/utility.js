import { pageBody } from "./dom.js";

const upperCase = (description) => {
  let descriptionArr = description.split(" ");

  descriptionArr.forEach((w, i) => {
    return (descriptionArr[i] =
      descriptionArr[i].charAt(0).toUpperCase() + descriptionArr[i].slice(1));
  });
  const descriptionUpperCase = descriptionArr.join(" ");
  return descriptionUpperCase;
};

const getSearchInputValue = () => {
  const searchInput = document.querySelector(".input-box").value;
  location.replace(`https://www.google.com/search?q=${searchInput}`);
};

const search = getSearchInputValue;
const inputBoxKey = document.querySelector(".input-box");

inputBoxKey.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("enter");
    search();
  }
});

const greetUser = () => {
  const hrsNow = new Date().getHours();
  if (hrsNow < 12) {
    pageBody.greetUser.textContent = "Good Morning";
  } else if (hrsNow >= 12 && hrsNow <= 17) {
    pageBody.greetUser.textContent = "Good Afternoon";
  } else if (hrsNow >= 17 && hrsNow <= 24) {
    pageBody.greetUser.textContent = "Good Evening";
  }
};

const displayGreet = greetUser();

export { upperCase, getSearchInputValue, displayGreet };
