describe('template spec', () => {

  it('check cypress pricing', function() {
    cy.visit('/');
    cy.get(':nth-child(5) > .nav-bar-link').click();
    cy.get('[data-cy="pricing-annually-top"] > .flex').should('have.text', ' Save 11% ');
    cy.get(':nth-child(3) > .mb-\\[8px\\]').should('have.text', 'Business');
    cy.get('[data-cy="pricing-plan-free"]').should('be.visible');
  });

})