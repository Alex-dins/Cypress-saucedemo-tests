describe("Testing login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successfull login", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });
});
