class CartPage {
  locators = {
    cartItems: "[data-test=cart-item]",
    checkoutButton: "[data-test=checkout]",
    continueShoppingButton: "[data-test=continue]",
    removeItemButton: "[data-test=remove-item-button]",
    firstNameInput: "[data-test='firstName']",
    lastNameInput: "[data-test='lastName']",
    postalCode: "[data-test='postalCode']",
    itemTotal: "[data-test='subtotal-label']",
    tax: "[data-test='tax-label']",
    total: "[data-test='total-label']",
    finishButton: "[data-test='finish']",
    successMessage: "[data-test='complete-header']",
    backHomeButton: "[data-test='back-to-products']",
  };

  clickCheckout() {
    cy.get(this.locators.checkoutButton).click();
  }

  clickFinish() {
    cy.get(this.locators.finishButton).click();
  }

  fillOutForm(firstName, lastName, postalCode) {
    cy.get(this.locators.firstNameInput).type(firstName);
    cy.get(this.locators.lastNameInput).type(lastName);
    cy.get(this.locators.postalCode).type(postalCode);
  }

  clickContinueShopping() {
    cy.get(this.locators.continueShoppingButton).click();
  }

  removeItem(itemName) {
    cy.contains(this.locators.cartItems, itemName)
      .find(this.locators.removeItemButton)
      .click();
  }

  getSuccessMessage() {
    return cy.get(this.locators.successMessage);
  }

  goToHome() {
    return cy.get(this.locators.backHomeButton).click();
  }
}

export default CartPage;
