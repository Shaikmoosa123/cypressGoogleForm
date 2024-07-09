class FormPage {
    
    visit() {
        cy.log("Test Starting...");
        cy.visit(Cypress.env("google_url"));
        cy.log("Form opened");

    }
  
    enterName(name) {
        cy.enter_name(name);
    }
  
    selectAge(age, c1) {
        cy.choose_age(age, c1);
    }
  
    selectExercise(chooseAoption, c2) {
        cy.doYouExercise(chooseAoption, c2);
      
    }
  
    submitForm() {
        cy.formsubmit();
      
    }
  
    verifySubmission() {
        cy.verify_submission();
      
    }
  }
  
  export default FormPage;
  