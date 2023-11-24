import { navMenu } from "../../data/dou_data/navigationMenu"

const bannerElement = '.b-head > ul'
const searchBar = 'input'

export const jobsPage = {
    verifyElements() {
        cy.get(bannerElement).find(':nth-child(6)');
        navMenu.verifyElements();
    },

    verifySearchBar() {
        cy.get(searchBar).find('.job').should('be.visible');
        }

}


cy.url().should('eq', 'hhttps://jobs.dou.ua/');
