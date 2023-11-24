import { navMenu } from '../../data/dou_data/navigationMenu';
import { jobsPage } from './jobsPage'

const bannerElement = '.b-head > ul';

export const homePage = {
    verifyElements() {
    cy.get(bannerElement).find('.b-head').should('be.visible');
    navMenu.verifyElements();
    },
    switchToPage() {
        navMenu.switchToPage();
        jobsPage.verifyElements();
    }
}