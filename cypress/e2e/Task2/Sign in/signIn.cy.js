/// <reference types="cypress"/>

describe("Login User", () => {
  it("Validate that an existing user can log in using valid credentials", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("header").should("be.visible");
    cy.contains("a", "Signup / Login").click();
    cy.contains("h2", "Login to your account").should("be.visible");
    const email = `shahdtest1@mail.com`;
    const password = `Password123!`;

    cy.findByDataQa("login-email").type(email);
    cy.findByDataQa("login-password").type(password);
    cy.findByDataQa("login-button").click();
    cy.contains("a", `Logged in as`).should("be.visible");
  });
});
