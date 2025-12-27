/// <reference types="cypress" />

describe("Login User", () => {
  let productName;
  it("Validate that the correct results appear when using search bar using valid names", () => {
    productName = "Tshirt";

    cy.SearchInit();
    cy.get("#search_product").type(productName);
    cy.get("#submit_search").click();
    cy.contains("h2", "Searched Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").each(($el) => {
      cy.wrap($el)
        .find(".productinfo p")
        .invoke("text")
        .then((text) => {
          const normalizedText = text.toLowerCase().replace(/[-\s]/g, ""); // remove hyphens & spaces
          const productNormalized = productName
            .toLowerCase()
            .replace(/[-\s]/g, "");
          expect(normalizedText).to.include(productNormalized);
        });
    });
  });

  it("Validate search with invalid product name", () => {
    const invalidProduct = "invalidproduct123";
    cy.SearchInit();

    cy.get("#search_product").type(invalidProduct);
    cy.get("#submit_search").click();

    cy.contains("h2", "Searched Products").should("be.visible");

    cy.get(".features_items .product-image-wrapper").should("have.length", 0);
  });
});
