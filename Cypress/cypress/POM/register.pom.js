// import locators related to register page from Locators folder
import { registerLocators, customerRegisterEmptyErrors, customerRegisterInvalidErrors } from "../Locators/register.loc";

// Create a class for interacting with elements on the register page
class RegisterPage {
    
    //  visit register page
    visitRegisterPage()
    {
        cy.visit(`${registerLocators.registerUrl}`)
    }

    //  validate register page elements exists
    validatePageInfo() 
    {
        cy.get(registerLocators.header).should('have.text', registerLocators.headerText);
        cy.get(registerLocators.registerParagraph).should('have.text', registerLocators.registerParagraphText);
    }
    
    // Get the table element and verify the elements and text inside the table
    validateTableElementsAndTexts() 
    {
        cy.get(registerLocators.tableClass).then(() => {
            cy.get(registerLocators.phoneElement).should("include.text", registerLocators.phoneText);
            cy.get(registerLocators.usernameElement).should("include.text", registerLocators.usernameText);
            cy.get(registerLocators.passwordElement).should("include.text", registerLocators.passwordText);
            cy.get(registerLocators.confirmPasswordElement).should("include.text", registerLocators.confirmPasswordText);            
        });
    }

    // validate error message for empty username, password and confirm password while registering as a new user
    validateRegisterEmptyMessage() 
    {
        cy.get(customerRegisterEmptyErrors.usernameErrorId)
                                                    .should("have.text",customerRegisterEmptyErrors.usernameErrorMessage)
        cy.get(customerRegisterEmptyErrors.passwordErrorId)
                                                    .should("have.text",customerRegisterEmptyErrors.passwordErrorMessage)
        cy.get(customerRegisterEmptyErrors.repeatedPasswordErrorId)
                                                    .should("have.text",customerRegisterEmptyErrors.repeatedPasswordErrorMessage)
    }

    // provide username and password during registration
    provideUsernamePassword(username,password,confirmPasword)
    {
        cy.get(registerLocators.usernameInput).clear().type(username)
        cy.get(registerLocators.passwordInput).clear().type(password)
        cy.get(registerLocators.confirmPasswordInput).clear().type(confirmPasword)
    }

    // provide phone number during registration 
    providePhoneNumber(phoneNumber)
    {
        cy.get(registerLocators.phoneInput).type(phoneNumber)
    }

    //  validate error message for existing users during registration process
    validateUsernameExistsError()
    {
        cy.get(customerRegisterInvalidErrors.usernameExistsId)
                    .should("have.text",customerRegisterInvalidErrors.usernameExistsMessage)
    }

    // validate error message for different password and repeat password value inputs during registration
    validatePasswordMismatchError()
    {
        cy.get(customerRegisterInvalidErrors.differentPasswordsId)
                    .should("have.text",customerRegisterInvalidErrors.differentPasswordsMessage)
    }

    validateRegistration()
    {
        cy.get(registerLocators.loginTitleId).should("include.text",registerLocators.loginTitleMessage)
        cy.get(registerLocators.registerParagraph).should("have.text",registerLocators.loginParagraphText)
    }

    //logout after registration
    logout(){
        cy.get("a[href='logout.htm']").click()
    }
}

export default RegisterPage;