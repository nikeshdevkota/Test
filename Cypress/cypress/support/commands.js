// create common locators for ForgotLogin and Register Pages
const customerInfoLocators = {
    tableClass: "[class='form2']",
    firstNameElement: "tr:nth-child(1) td:nth-child(1)",
    firstNameText: "First Name",
    firstNameInput: "tr:nth-child(1) td:nth-child(2)",
    lastNameElement: "tr:nth-child(2) td:nth-child(1)",
    lastNameText: "Last Name",
    lastNameInput: "tr:nth-child(2) td:nth-child(2)",
    streetAddressElement: "tr:nth-child(3) td:nth-child(1)",
    streetAddressText: "Address" ,
    streetAddressInput: "tr:nth-child(3) td:nth-child(2)",
    cityAddressElement: "tr:nth-child(4) td:nth-child(1)",
    cityAddressText: "City",
    cityAddressInput: "tr:nth-child(4) td:nth-child(2)",
    stateAddressElement: "tr:nth-child(5) td:nth-child(1)",
    stateAddressText: "State",
    stateAddressInput: "tr:nth-child(5) td:nth-child(2)",
    zipCodeElement: "tr:nth-child(6) td:nth-child(1)",
    zipCodeText: "Zip Code",
    zipCodeInput: "tr:nth-child(6) td:nth-child(2)",
    ssnElement: (index) => `tr:nth-child(${index}) td:nth-child(1)`,
    ssnText: "SSN",
    ssnInput: (index) => `tr:nth-child(${index}) td:nth-child(2)`,
};

// create common error messages locators for ForgotLogin and Register Pages
const customerEmptyErrorMessages = {
    firstNameId:"tr:nth-child(1) td:nth-child(3)",
    firstNameMessage: "First name is required.",
    lastNameId:"tr:nth-child(2) td:nth-child(3)",
    lastNameMessage: "Last name is required.",
    streetAddressId: "tr:nth-child(3) td:nth-child(3)" ,
    streetAddressMessage: "Address is required.",
    cityAddressId: "tr:nth-child(4) td:nth-child(3)",
    cityAddressMessage: "City is required.",
    stateAddressId: "tr:nth-child(5) td:nth-child(3)",
    stateAddressMessage: "State is required.",
    zipCodeId: "tr:nth-child(6) td:nth-child(3)",
    zipCodeMessage: "Zip Code is required.",
    ssnId: (index) => `tr:nth-child(${index}) td:nth-child(3)`,
    ssnMessage: "Social Security Number is required."
}

// create locators for resetting database

const resetDatabaseLocators = {
    adminPageUrl: "/admin.htm",
    cleanDatabaseId: "CLEAN",
    initializeDatabaseId: "INIT",
    cleanDatabaseText:"Database Cleaned",
    initializeDatabaseText: "Database Initialized",
    paragraph: "div[id='rightPanel'] p"
}

//  create a custom command for validating common page elements inside a form table in Forgot Login and Register pages 
Cypress.Commands.add("getCommonCustomerInfoLabel", (index) => {
    cy.get(customerInfoLocators.tableClass).then(() => {
        cy.get(customerInfoLocators.firstNameElement).should("include.text", customerInfoLocators.firstNameText);
        cy.get(customerInfoLocators.lastNameElement).should("include.text", customerInfoLocators.lastNameText);
        cy.get(customerInfoLocators.streetAddressElement).should("include.text", customerInfoLocators.streetAddressText);
        cy.get(customerInfoLocators.cityAddressElement).should("include.text", customerInfoLocators.cityAddressText);
        cy.get(customerInfoLocators.stateAddressElement).should("include.text", customerInfoLocators.stateAddressText);
        cy.get(customerInfoLocators.zipCodeElement).should("include.text", customerInfoLocators.zipCodeText);
        cy.get(customerInfoLocators.ssnElement(index)).should("include.text", customerInfoLocators.ssnText);
    });
  })

//  create a custom command for providing common inputs in Forgot Login and Register pages 
  Cypress.Commands.add("provideCommonCustomerInfo", (firstName,lastName,street,city,state,zipCode,ssn,index) => {
    cy.get(customerInfoLocators.tableClass).then(() => {
        cy.get(customerInfoLocators.firstNameInput).clear().type(firstName);
        cy.get(customerInfoLocators.lastNameInput).clear().type(lastName);
        cy.get(customerInfoLocators.streetAddressInput).clear().type(street);
        cy.get(customerInfoLocators.cityAddressInput).clear().type(city);
        cy.get(customerInfoLocators.stateAddressInput).clear().type(state);
        cy.get(customerInfoLocators.zipCodeInput).clear().type(zipCode);
        cy.get(customerInfoLocators.ssnInput(index)).clear().type(ssn);
    });
  })

//   create a custom command for clicking inputs in Forgot Login and Register pages
  Cypress.Commands.add("clickInput", (value) => {
    cy.get(`input[value= '${value}']`).click();
  })

//   create a custom command for clicking buttons in Admin Page to reset database 
  Cypress.Commands.add("clickButton", (value) => {
    cy.get(`button[value= ${value}]`).click();
  })

  //   create a custom command to reset database 
  Cypress.Commands.add("resetDatabase", () => {
    cy.visit(resetDatabaseLocators.adminPageUrl)
    cy.clickButton(resetDatabaseLocators.initializeDatabaseId)
    cy.get(resetDatabaseLocators.paragraph).should("include.text",resetDatabaseLocators.initializeDatabaseText)
    cy.clickButton(resetDatabaseLocators.cleanDatabaseId)
    cy.get(resetDatabaseLocators.paragraph).should("include.text",resetDatabaseLocators.cleanDatabaseText)
  })


//   create a custom command for validating empty input erros in Forgot Login and Register pages
  Cypress.Commands.add("validateCommonCustomerEmptyMessage", (value,index) => {
        cy.clickInput(value)
        cy.get(customerEmptyErrorMessages.firstNameId).should("include.text",customerEmptyErrorMessages.firstNameMessage);
        cy.get(customerEmptyErrorMessages.lastNameId).should("include.text",customerEmptyErrorMessages.lastNameMessage);
        cy.get(customerEmptyErrorMessages.streetAddressId).should("include.text",customerEmptyErrorMessages.streetAddressMessage);
        cy.get(customerEmptyErrorMessages.cityAddressId).should("include.text",customerEmptyErrorMessages.cityAddressMessage);
        cy.get(customerEmptyErrorMessages.stateAddressId).should("include.text",customerEmptyErrorMessages.stateAddressMessage);
        cy.get(customerEmptyErrorMessages.zipCodeId).should("include.text",customerEmptyErrorMessages.zipCodeMessage);
        cy.get(customerEmptyErrorMessages.ssnId(index)).should("include.text",customerEmptyErrorMessages.ssnMessage);
  })