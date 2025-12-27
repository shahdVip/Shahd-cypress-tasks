/// <reference types="cypress" />

describe("Add Products to Cart from Product Details Page", () => {
  it("Validate that a user can add a product to the shopping cart from the product details page.", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("header").should("be.visible");
    cy.contains("a", "Products").click();
    cy.url().should("include", "/products");
    cy.contains("h2", "All Products").should("be.visible");

    cy.get(".choose a").first().click();

    cy.url().should("include", "/product_details");

    cy.get(".product-information h2").should("be.visible");
    cy.get(".product-information span span").should("be.visible");

    cy.contains("button", "Add to cart").click();

    cy.contains("a", "View Cart").click();

    cy.get("tbody tr").should("have.length", 1);
  });
});
