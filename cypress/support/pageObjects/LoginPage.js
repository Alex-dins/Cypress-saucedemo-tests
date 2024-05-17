class LoginPage {
  locators = {
    usernameField: "[data-test=username]",
    passwordField: "[data-test=password]",
    loginButton: "[data-test=login-button]",
    errorMessage: "[data-test=error]",
  };

  login(username, password) {
    cy.get(this.locators.usernameField).type(username);
    cy.get(this.locators.passwordField).type(password, { log: false });
    cy.get(this.locators.loginButton).click();
  }

  errorMessage() {
    return cy.get(this.locators.errorMessage);
  }
}

export default LoginPage;
