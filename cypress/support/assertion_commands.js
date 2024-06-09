import HomePage from "./pageObjects/HomePage";
import CartPage from "./pageObjects/CartPage";
import getPriceFromElement from "./utils/functions";

let homePage = new HomePage();
let cartPage = new CartPage();

Cypress.Commands.add("checkUrlIncludes", (path) => {
  return cy.url().should("include", path);
});

Cypress.Commands.add("checkOrder", (option) => {
  cy.get(homePage.locators.itemName).then(($names) => {
    const names = $names.toArray().map((name) => Cypress.$(name).text());

    option === "Name (A to Z)" ? names.sort() : names.sort().reverse();

    cy.get(homePage.locators.itemName).each(($name, index) => {
      expect($name.text()).to.equal(names[index]);
    });
  });
});

Cypress.Commands.add("checkPrice", (option) => {
  cy.get(homePage.locators.itemPrice).then(($prices) => {
    const prices = $prices
      .map((_, price) => parseFloat(price.innerText.slice(1)))
      .get();

    prices.sort((a, b) => (option === "Price (low to high)" ? a - b : b - a));

    cy.get(homePage.locators.itemPrice).each(($price, index) => {
      const expectedPriceText = `$${prices[index].toFixed(2)}`;
      expect($price.text()).to.equal(expectedPriceText);
    });
  });
});

Cypress.Commands.add("checkTotalWithTax", () => {
  getPriceFromElement(cartPage.locators.itemTotal).then((itemTotal) => {
    getPriceFromElement(cartPage.locators.tax).then((tax) => {
      const expectedTotal = itemTotal + tax;

      getPriceFromElement(cartPage.locators.total).then((actualTotal) => {
        expect(actualTotal).to.equal(expectedTotal);
      });
    });
  });
});
