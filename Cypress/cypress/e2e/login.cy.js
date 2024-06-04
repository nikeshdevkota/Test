import LoginPage from "../POM/login.pom"
const login = new LoginPage()


describe('Login Functionality Page User Journey', () => {
    
    // visit register page before each function
    beforeEach(function () 
    { 
       cy.visit("") 
    })

    context("Provide invalid inputs for login",()=>{
       
        it('Provide empty inputs and validate empty inputs login error message ', () => {
            login.provideEmptyInputs()
        })

        it('Provide invalid username and valid password  ', () => {
            
            login.filterData("invalidLoginUsername")
    
        })

        it('Provide valid username and invalid password  ', () => {
            login.filterData("invalidLoginPassword")
        })

        it('Provide non existent username and password  ', () => {
            login.filterData("nonExistentUsername")
        })
    })

    context("Provide valid inputs for login",()=>{
       
        it('Provide valid username and password and validate successful login message ', () => {
            login.filterData("validLoginData")
        })

    })
})