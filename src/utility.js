const upperCase = (description) => {
  let descriptionArr = description.split(" ");

  descriptionArr.forEach((w, i) => {
    return (descriptionArr[i] =
      descriptionArr[i].charAt(0).toUpperCase() + descriptionArr[i].slice(1));
  });
  const descriptionUpperCase = descriptionArr.join(" ");
  return descriptionUpperCase;
};

export { upperCase };
