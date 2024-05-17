class HomePage {
  locators = {
    appLogo: ".app_logo",
    inventoryContainer: "[data-test=inventory-list]",
    inventoryItems: "[data-test=inventory-item]",
    // Initialize elements specific to the HomePage
  };

  // Methods to interact with elements on the HomePage can be added here
  appLogo() {
    return cy.get(this.locators.appLogo);
  }
}
export default HomePage;
