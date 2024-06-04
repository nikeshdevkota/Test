import ForgotPage from "../POM/forgot.pom"
const forgot = new ForgotPage()
const neatCSV = require('neat-csv')
let validData

describe('Forgot Login Page User Journey', () => {
    
    // visit register page before each function
    beforeEach(function () 
    { 
        forgot.visitForgotPage()  
    })

    //  validate page elements. Use context to group different page element validations 
    context("Validate forgot page elements ",()=>{
       
        it('Validate the page header and paragraph information in forgot page', () => {
            forgot.validatePageInfo()
          })
      
          it('Validate the table elements and texts in forgot page', () => {
              cy.getCommonCustomerInfoLabel(7)
              
            })
    })

    //  Use context to group invalid inputs for forgot login
    context("Provide invalid inputs for forgot login and validate error messages",()=>{
       
        it('Provide empty inputs and validate empty input error messages', () => {
            cy.validateCommonCustomerEmptyMessage("Find My Login Info",7)

        })
      
        it('Provide non existing input fields and validate error message', () => {
            cy.fixture('userData.csv').then(neatCSV).then((userData) => {
                validData = userData.filter((data) => data.validity == 'invalidForgot');
                validData.forEach((data) => {
                cy.provideCommonCustomerInfo(data.firstName,data.lastName,data.street,data.city,data.state,data.zipCode,data.ssn,7)
                cy.clickInput("Find My Login Info")
                forgot.validateNotCustomer()
                })
            })
    
        })
    })

    //  Use context to group valid inputs for forgot login
    context("Provide valid inputs for forgot login and validate error messages",()=>{
       
        it.only('Provide valid inputs and validate empty input error messages', () => {
            
            cy.fixture('userData.csv').then(neatCSV).then((userData) => {
                validData = userData.filter((data) => data.validity == 'validForgot');
                validData.forEach((data) => {
                cy.provideCommonCustomerInfo(data.firstName,data.lastName,data.street,data.city,data.state,data.zipCode,data.ssn,7)
                cy.clickInput("Find My Login Info")
                forgot.validateForgotSuccess(data.username,data.password)
                })
            })
            
           

        })
      
      
    })
})
