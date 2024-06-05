import { menuLocators } from "../Locators/menu.loc"
class Menu {

    verifyTopPanelLinks(n, link){
        cy.get(menuLocators.topMenuId).find(`a:nth-child(${n})`).invoke('attr', 'href').then((value) => {
            // Check if the attribute value contains the link
            expect(value).to.equal(link);
          });
    }

    verifyTopPanelMenuElements()
    {
        cy.get(menuLocators.topMenuId).then(()=>{
            cy.get(menuLocators.logoId).should("exist")
            cy.get(menuLocators.captionId).should("include.text",menuLocators.captionText).then(()=>{
            this.verifyTopPanelLinks(1,menuLocators.adminUrl)
            this.verifyTopPanelLinks(2,menuLocators.homeUrl)
            })

        })
    }

    verifyListLinks(position,n,link) {
        cy.get(position).find("li").eq(n).find("a")
        .invoke('attr', 'href').then((value) => {
            // Check if the attribute value contains the link
            expect(value).to.equal(link);
          });
    }

    verifyLeftPanelMenuElements()
    
    {
        this.verifyListLinks(menuLocators.leftMenuId,1,menuLocators.aboutUsUrl) 
        this.verifyListLinks(menuLocators.leftMenuId,2,menuLocators.servicesUrl) 
        this.verifyListLinks(menuLocators.leftMenuId,3,menuLocators.productsUrl) 
        this.verifyListLinks(menuLocators.leftMenuId,4,menuLocators.locationUrl) 
        this.verifyListLinks(menuLocators.leftMenuId,5,menuLocators.adminUrl) 
    }
    
    verifyRightPanelMenuElements()
    {
           
        this.verifyListLinks(menuLocators.rightmenuId,0,menuLocators.homeUrl)
        this.verifyListLinks(menuLocators.rightmenuId,1,menuLocators.aboutUsUrl)
        this.verifyListLinks(menuLocators.rightmenuId,2,menuLocators.contactUrl)
    
    }
    
    verifyFooterElements(){
        this.verifyListLinks(menuLocators.footerId,0,menuLocators.homeUrl)
        this.verifyListLinks(menuLocators.footerId,1,menuLocators.aboutUsUrl) 
        this.verifyListLinks(menuLocators.footerId,2,menuLocators.servicesUrl) 
        this.verifyListLinks(menuLocators.footerId,3,menuLocators.productsUrl) 
        this.verifyListLinks(menuLocators.footerId,4,menuLocators.locationUrl) 
        this.verifyListLinks(menuLocators.footerId,5,menuLocators.forumUrl) 
        this.verifyListLinks(menuLocators.footerId,6,menuLocators.siteMapUrl) 
        this.verifyListLinks(menuLocators.footerId,7,menuLocators.contactUrl) 
        cy.get(menuLocators.footerMainId).find(menuLocators.copyRightId)
        .should('include.text',menuLocators.copyRightText)
        this.verifyListLinks(menuLocators.visitId,1,menuLocators.visitUrl)           
    }
}

export default Menu