const navbarElement = '.b-head > ul';

export const navMenu = {
  verifyElements() {
    cy.get(navbarElement).find('.b-head').should('be.visible');
  },
  switchToQueryingPage() {
    cy.get(navbarElement).find('.b-head > ul > :nth-child(6)').click();
  }
}