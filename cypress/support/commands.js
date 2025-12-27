// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("findByDataQa", (dataQa) => {
  cy.get(`[data-qa=${dataQa}]`);
});

Cypress.Commands.add("loginToSauceDemo", (email, password) => {
  cy.visit("https://sauce-demo.myshopify.com/account/login");
  cy.get("#customer_email").type(email);
  cy.get("#customer_password").type(password);
  cy.get("#customer_login [type=submit]").dblclick();
});

Cypress.Commands.add("SearchInit", () => {
  cy.visit("https://automationexercise.com/");
  cy.get("header").should("be.visible");
  cy.contains("a", "Products").click();
  cy.url().should("include", "/products");
  cy.contains("h2", "All Products").should("be.visible");
});
