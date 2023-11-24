import { jobsPage } from "../../cypress/pages/Dou_Pages/jobsPage.js";
import { HomePage } from "../../cypress/pages/Dou_Pages/homePage.js"


describe('OPen Jobs page and Search QA vecansies', () => {

  content('Querying', () => {
    beforeEach(() => {
      cy.visit('https://dou.ua/')
        .get('.b-head > ul > :nth-child(6)').should('be.visible');
      homePage.verifyElements();
    });

    it('cy.get() - query DOM elements', () => {
      homePage.switchToPage();
    });
  });
});
