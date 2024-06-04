import RegisterPage from "../POM/register.pom"

const register = new RegisterPage()
const neatCSV = require('neat-csv')
let validData
function registerValidUsers(phoneNumber){
    cy.fixture('userData.csv').then(neatCSV).then((userData) => {
        if (phoneNumber==true){
            validData = userData.filter((data) => data.validity == 'validRegister' && data.phone!='');
        }
        else{
            validData = userData.filter((data) => data.validity == 'validRegister' && data.phone =='');
        }
        validData.forEach((data) => {
        register.visitRegisterPage() 
        cy.provideCommonCustomerInfo(data.firstName,data.lastName,data.street,data.city,data.state,data.zipCode,data.ssn,8)
        if (phoneNumber==true)
            {
            register.providePhoneNumber(data.phone) 
            }
        register.provideUsernamePassword(data.username,data.password,data.confirm)
        cy.clickInput("Register")
        register.validateRegistration()
        register.logout()
        })
    })
}

describe('Register Page User Journey', () => {
    
    // visit register page before each function
    beforeEach(function () 
    { 
        register.visitRegisterPage()      
    })

    //  validate page elements. Use context to group different page element validations 
    context("Validate register page elements ",()=>{
       
        it('Validate the page header and paragraph information in register page', () => {
            register.validatePageInfo()
          })
      
          it('Validate the table elements and texts in register page', () => {
              cy.getCommonCustomerInfoLabel(8)
              register.validateTableElementsAndTexts()
            })
    })

     //  Use context to group valid inputs for customer registration
    context.only("Provide valid inputs for registration with/without providing phone number and validate new registration",()=>{
       
        it('Provide valid inputs without a phone number and validate new registration ', () => {
            cy.resetDatabase()
            registerValidUsers(false)
        })
        
        it('Provide valid inputs along with a phone number and validate new registration ', () => {
           
            registerValidUsers(true)
        })

    })

    //  Use context to group invalid inputs for customer registration
    context("Provide invalid inputs for registration and validate error messages",()=>{
       
        it('Provide empty inputs and validate empty input error messages', () => {
            cy.validateCommonCustomerEmptyMessage("Register",8)
            register.validateRegisterEmptyMessage()

        })
      
        it('Provide already existing username and validate error message', () => {
            cy.fixture('userData.csv').then(neatCSV).then((userData) => {
                validData = userData.filter((data) => data.validity == 'invalidRegister' && data.password==data.confirm);
                validData.forEach((data) => {
                cy.provideCommonCustomerInfo(data.firstName,data.lastName,data.street,data.city,data.state,data.zipCode,data.ssn,8)
                register.provideUsernamePassword(data.username,data.password,data.confirm)
                cy.clickInput("Register")
                register.validateUsernameExistsError()
                })
            })
            
        })

        it('Validate password mismatch error when providing different values for password and confirm password', () => {
            cy.fixture('userData.csv').then(neatCSV).then((userData) => {
                validData = userData.filter((data) => data.validity == 'invalidRegister' && data.password!=data.confirm);
                validData.forEach((data) => {
                cy.provideCommonCustomerInfo(data.firstName,data.lastName,data.street,data.city,data.state,data.zipCode,data.ssn,8)
                register.provideUsernamePassword(data.username,data.password,data.confirm)
                cy.clickInput("Register")
                register.validatePasswordMismatchError()
                })
            })
         
        })
    })
 
})