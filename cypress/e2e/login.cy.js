import LoginPage from "../support/pageObjects/LoginPage";
import HomePage from "../support/pageObjects/HomePage";
import { Endpoints } from "../support/helper/EndpointsMap";
import { FakeData } from "../support/helper/FakeData";
import alerts from "../fixtures/alerts.json";

describe("Testing login page", () => {
  let loginPage;
  let homePage;

  beforeEach(() => {
    cy.visit("/");
    loginPage = new LoginPage();
    homePage = new HomePage();
  });

  it("Successful login", () => {
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
    homePage.appLogo().should("be.visible");
    cy.checkUrlIncludes(Endpoints.inventory);
  });

  it("Unsuccessful login with incorrect credentials", () => {
    loginPage.login(FakeData.username, FakeData.password);

    loginPage
      .errorMessage()
      .should("be.visible")
      .and("have.text", alerts.LOGIN_ERROR_MESSAGE);
  });

  it("Login and logout", () => {
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
    homePage.logout();

    cy.checkUrlIncludes("/");
  });
});
