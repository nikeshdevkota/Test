import Menu from "../POM/menu.pom"
const menu = new Menu()

describe('Menu Elements Verification', () => {
    
    // visit register page before each function
    beforeEach(function () 
    { 
       cy.visit("") 
    })
    
    it('verify toppanel menu elements', () => {
        menu.verifyTopPanelMenuElements()
    })

    it('verify leftpanel menu elements', () => {
        menu.verifyLeftPanelMenuElements()
    })

    it('verify rightpanel menu elements', () => {
        menu.verifyRightPanelMenuElements()
    })

    it('verify footer menu elements', () => {
        menu.verifyFooterElements()
    })

})