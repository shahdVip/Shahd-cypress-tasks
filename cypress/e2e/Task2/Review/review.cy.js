/// <reference types="cypress" />

describe("Add a Product Review", () => {
  it("Validate that a logged-in user can add a review to a product", () => {
    cy.visit("https://automationexercise.com/");

    cy.contains("a", "Products").click();

    cy.url().should("include", "/products");
    cy.contains("h2", "All Products").should("be.visible");

    cy.get(".choose a").first().click();

    cy.contains("a", "Write Your Review").should("be.visible");

    cy.get("#name").type("Shahd Test");
    cy.get("#email").type("shahdtest1@mail.com");
    cy.get("#review").type("This is a great product. Highly recommended!");

    cy.get("#button-review").click();

    cy.contains("span", "Thank you for your review.").should("be.visible");
  });
});
