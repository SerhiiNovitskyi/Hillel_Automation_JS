export default class MainPage {
    dropdownList() {
        return cy.get('#primary-menu span.nav-drop-title-wrap')
    }

    elementindropdownlist() {
        return cy.get('ul.sub-menu.clicked li')
    }
}