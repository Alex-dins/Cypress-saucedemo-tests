Cypress.Commands.add("checkUrlIncludes", (path) => {
  return cy.url().should("include", path);
});
