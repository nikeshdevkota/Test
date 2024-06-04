import { forgotLocators } from "../Locators/forgot.loc";
// Create a class for interacting with elements on the forgot page
class ForgotPage {
    
    //  visit forgot page
    visitForgotPage()
    {
        cy.visit(`${forgotLocators.forgotUrl}`)
    }
     //  validate forgot page elements exists
     validatePageInfo() 
     {
         cy.get(forgotLocators.headerId).should('have.text', forgotLocators.headerText);
         cy.get(forgotLocators.paragraphId).should('have.text', forgotLocators.paragraphText);
     }

    //  validate non_existent customer error message
    validateNotCustomer(){
        cy.get(forgotLocators.nonExistentHeadeId).should("include.text",forgotLocators.nonExistentHeaderText)
        cy.get(forgotLocators.nonExistentParaId).should("have.text",forgotLocators.nonExistentParaText)
    }
    validateForgotSuccess(username,password){
        cy.get(forgotLocators.paragraphId).should("include.text",forgotLocators.forgotSuccesText)
        .and("include.text",username).and("include.text",password)
    }

}
export default ForgotPage;