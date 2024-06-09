import HomePage from "../support/pageObjects/HomePage";
import LoginPage from "../support/pageObjects/LoginPage";

describe("Sort items", () => {
  let loginPage;
  let homePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    homePage = new HomePage();

    cy.visit("/");
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Sort by name Z - A", () => {
    homePage.sortItems("Name (Z to A)");
    cy.checkOrder("Name (Z to A)");
  });

  it("Sort by name A - Z", () => {
    homePage.sortItems("Name (A to Z)");
    cy.checkOrder("Name (A to Z)");
  });

  it("Sort by price low to high", () => {
    homePage.sortItems("Price (low to high)");
    cy.checkPrice("Price (low to high)");
  });

  it("Sort by price high to low", () => {
    homePage.sortItems("Price (high to low)");
    cy.checkPrice("Price (high to low)");
  });
});
