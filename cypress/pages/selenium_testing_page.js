const linkToSeleniumOnMainPage = 'ul.menu1 a[href="/selenium-tutorial.html"]'

export const seleniumPage = {
    clickLinkOnMainPage() {
        cy.get(linkToSeleniumOnMainPage).should('be.visible')
        .click()
    }
}