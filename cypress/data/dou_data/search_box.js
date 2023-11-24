const searchBox = 'input.job';

export const navMenu = {
  verifySerchBox() {
    cy.get(searchBox).find('input.job').should('be.visible');
  },
  writeSearchData() {
    cy.get(searchBox).find('#navbar ul > li:first').click();
    cy.get(searchBox).find('#navbar ul > li:first > .dropdown-menu li:first').click(); 
  }
}