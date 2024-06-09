class HomePage {
  locators = {
    appLogo: ".app_logo",
    inventoryContainer: "[data-test=inventory-list]",
    inventoryItems: "[data-test=inventory-item]",
    openMenu: ".bm-burger-button",
    logoutSidebarLink: "[data-test=logout-sidebar-link]",
    sortSelect: "[data-test='product-sort-container']",
    itemName: "[data-test='inventory-item-name']",
    itemPrice: "[data-test='inventory-item-price']",
    shopCartBadge: "[data-test='shopping-cart-badge']",
    shopCartLink: "[data-test='shopping-cart-link']",
  };

  appLogo() {
    return cy.get(this.locators.appLogo);
  }

  shopCartBadge() {
    return cy.get(this.locators.shopCartBadge);
  }

  logout() {
    cy.get(this.locators.openMenu).click();
    cy.get(this.locators.logoutSidebarLink).click();
  }

  sortItems(option) {
    const sortOptions = {
      "Name (A to Z)": "az",
      "Name (Z to A)": "za",
      "Price (low to high)": "lohi",
      "Price (high to low)": "hilo",
    };

    const value = sortOptions[option];
    if (!value) {
      throw new Error("Invalid sort option");
    }

    cy.get(this.locators.sortSelect).select(value);
  }

  addItemToCart(itemName) {
    cy.get(this.locators.inventoryItems)
      .contains(itemName)
      .parents(this.locators.inventoryItems)
      .find("button")
      .contains("Add to cart")
      .click();
  }

  goToCart() {
    return cy.get(this.locators.shopCartLink).click();
  }
}
export default HomePage;
