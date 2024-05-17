import LoginPage from "../support/pageObjects/loginPage";
import HomePage from "../support/pageObjects/HomePage";
import { Endpoints } from "../support/helper/EndpointsMap";
import { FakeData } from "../support/helper/FakeData";
import TextContent from "../fixtures/textContent.json";

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

  it.only("Unsuccessful login with incorrect credentials", () => {
    loginPage.login(FakeData.username, FakeData.password);

    loginPage
      .errorMessage()
      .should("be.visible")
      .and("have.text", TextContent.LOGIN_ERROR_MESSAGE);
  });
});
