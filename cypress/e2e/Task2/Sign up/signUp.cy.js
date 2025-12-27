/// <reference types="cypress"/>

describe("Register User", () => {
  it("Validate that a new user can successfully register using the Signup / Login page.", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("header").should("be.visible");
    cy.contains("a", "Signup / Login").click();
    cy.contains("h2", "New User Signup!").should("be.visible");
    const username = "ShahdTest";
    const email = `shahdtest1@mail.com`;
    cy.findByDataQa("signup-name").type(username);
    cy.findByDataQa("signup-email").type(email);
    cy.findByDataQa("signup-button").click();

    cy.contains("b", "Enter Account Information").should("be.visible");
    cy.get("#id_gender2").check();
    cy.get("#password").type("Password123!");
    cy.get("#days").select("1");
    cy.get("#months").select("January");
    cy.get("#years").select("2002");

    cy.get("#newsletter").check();
    cy.get("#optin").check();

    cy.get("#first_name").type("Shahd");
    cy.get("#last_name").type("Test");
    cy.get("#company").type("Shahd.co");
    cy.get("#address1").type("Nablus");
    cy.get("#address2").type("Nablus");
    cy.get("#country").select("India");
    cy.get("#state").type("Nablus");
    cy.get("#city").type("Nablus");
    cy.get("#zipcode").type("00000");
    cy.get("#mobile_number").type("0558745213");

    cy.findByDataQa("create-account-button").click();
    cy.contains("b", "Account Created!").should("be.visible");
    cy.findByDataQa("continue-button").click();
    cy.contains("a", `Logged in as ${username}`).should("be.visible");
  });
});
