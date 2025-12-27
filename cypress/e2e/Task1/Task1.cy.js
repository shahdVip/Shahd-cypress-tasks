/// <reference types="cypress"/>

describe("template spec", () => {
  it("Selectors", () => {
    cy.visit("https://demo.productionready.io/#/register");
    cy.get(".navbar-brand");
    cy.get(".text-xs-center").first();
    cy.get(".text-xs-center").children("a").first();

    cy.get(".nav-item:visible").first();
    cy.get(".nav-item:visible").last();

    cy.get('input[placeholder="Username"]');
    cy.get('input[type="email"]');
    cy.get('input[ng-model="$ctrl.formData.password"]');

    cy.contains("button", "Sign up");

    cy.get('a[ui-sref="app.home"]');
    cy.contains("span", "An interactive learning project");
  });
});
