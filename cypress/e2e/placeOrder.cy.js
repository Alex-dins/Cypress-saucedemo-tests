import HomePage from "../support/pageObjects/HomePage";
import LoginPage from "../support/pageObjects/LoginPage";
import CartPage from "../support/pageObjects/CartPage";
import { Endpoints } from "../support/helper/EndpointsMap";
import { FakeData } from "../support/helper/FakeData";

describe("Place an Order", () => {
  let loginPage;
  let homePage;
  let cartPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    homePage = new HomePage();
    cartPage = new CartPage();

    cy.visit("/");
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Successfully place order", () => {
    homePage.addItemToCart("Sauce Labs Backpack");
    homePage.shopCartBadge().should("have.text", "1");

    homePage.addItemToCart("Sauce Labs Bolt T-Shirt");
    homePage.shopCartBadge().should("have.text", "2");

    homePage.goToCart();
    cy.checkUrlIncludes(Endpoints.cart);

    cartPage.clickCheckout();
    cy.checkUrlIncludes(Endpoints.checkoutStepOne);

    cartPage.fillOutForm(
      FakeData.username,
      FakeData.lastName,
      FakeData.postalCode
    );

    cartPage.clickContinueShopping();
    cy.checkUrlIncludes(Endpoints.checkoutStepTwo);

    cy.checkTotalWithTax();

    cartPage.clickFinish();
    cy.checkUrlIncludes(Endpoints.checkotComplete);

    cartPage
      .getSuccessMessage()
      .should("be.visible")
      .and("have.text", "Thank you for your order!");

    cartPage.goToHome();
    cy.checkUrlIncludes(Endpoints.inventory);
  });
});
