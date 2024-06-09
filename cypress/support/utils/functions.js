function getPriceFromElement(selector) {
  return cy
    .get(selector)
    .invoke("text")
    .then((text) => parseFloat(text.replace(/[^0-9.]/g, "")));
}

export default getPriceFromElement;
