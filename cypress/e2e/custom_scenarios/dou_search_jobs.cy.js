import { jobsPage } from "../../pages/Dou_Pages/jobsPage.js";
import { HomePage } from "../homePage.js"


describe.skip('OPen Jobs page and Search QA vecansies', () => {

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
