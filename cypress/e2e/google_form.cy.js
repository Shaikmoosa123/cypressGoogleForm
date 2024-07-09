import FormPage from '../e2e/pageObjects/google_form_PO.cy';
/// <reference types="cypress" />

const jsonData = require('../fixtures/userData.json')

describe('Form Submission Test', () => {
  const formPage = new FormPage();

 

  jsonData.forEach(data => {
    it(`should fill and submit the form for ${data.name}`, () => {

      formPage.visit();

      formPage.enterName(data.name);

      formPage.selectAge(data.age, data.comment1);

      formPage.selectExercise(data.chooseAoption, data.comment2);

      formPage.submitForm();

      formPage.verifySubmission();
    });
  });
});