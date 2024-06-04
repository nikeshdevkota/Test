import { loginLocators } from "../Locators/login.loc";
// Create a class for interacting with elements on the login page
const neatCSV = require('neat-csv')
class LoginPage {

     //  validate successful login elements exists
     validateLoginSuccess(firstName,lastName) 
     {
         cy.get(loginLocators.headerId).should('include.text', loginLocators.loginSucesssHeaderText);
         cy.get(loginLocators.loginSucesssTextId).should('include.text', firstName)
         .and('include.text', lastName);
         cy.get(loginLocators.accountTableId).should("exist")
     }
    
    //  validate default login elements exists
    validateLoginElements(){
        cy.get(loginLocators.loginFormId).should('include.text', loginLocators.loginFormUsernameText)
        .and('include.text',loginLocators.loginFormPasswordText);
    }

    // provide username and password input
    provideUsernamePassword(username,password){
        cy.get(loginLocators.usernameInputId).clear().type(username)
        cy.get(loginLocators.passwordInputId).clear().type(password)
    }

    provideEmptyInputs(){
        cy.clickInput("Log In")
        cy.get(loginLocators.headerId).should("include.text",loginLocators.errorHeaderText)
        cy.get(loginLocators.paragraphId).should("exist")
    }

    provideIncorectInputs(username,password){
        this.provideUsernamePassword(username,password)
        cy.clickInput("Log In")
        cy.get(loginLocators.headerId).should("include.text",loginLocators.errorHeaderText)
        cy.get(loginLocators.paragraphId).should("exist")
        // cy.get(loginLocators.loginSucesssTextId).should("include.text", "Welcome")
    }
        
    
    provideCorectInputs(username,password){
        this.provideUsernamePassword(username,password)
        cy.clickInput("Log In")
    }

    filterData(filterText){
        
        cy.fixture('userData.csv').then(neatCSV).then((userData) => {
            let validData = userData.filter((data) => data.validity == filterText);
            validData.forEach((data) => {
            if (filterText== "invalidLoginUsername" ||filterText == "invalidLoginPassword"|| filterText== "nonExistentUsername"){
                this.provideIncorectInputs(data.username,data.password)
            }
            
            else if(filterText== "validLoginData")
            {
                this.provideCorectInputs(data.username,data.password)
                this.validateLoginSuccess(data.firstName,data.lastName)
            }
            
            })
        })
    }

    logout(){
        cy.get("a[href='logout.htm']").click()
    }

}
export default LoginPage;