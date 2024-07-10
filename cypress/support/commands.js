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
Cypress.Commands.add("enter_name", (name) => {
  
    cy.get('input[type="text"]').type(name);
    cy.log("Name entered");
})

Cypress.Commands.add("choose_age", (age, c1) => {
    cy.get(age).click();
    cy.log(c1);
})

Cypress.Commands.add("doYouExercise", (chooseAoption, c2) => {
    cy.get('div[role="listbox"]').click();
    cy.get(chooseAoption).click();
    cy.log(c2);
})

Cypress.Commands.add("formsubmit", () => {
    cy.get('div[role="button"]').contains('Submit').click();
})

Cypress.Commands.add("verify_submission", () => {
    cy.contains('Your response has been recorded.');
    cy.log("Confirmed Response");
})

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })