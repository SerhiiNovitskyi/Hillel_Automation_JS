it('Open the main page and click startupds', () => {
    cy.visit('https://ain.ua/');



    // Use a more descriptive selector to target the link by its text content
    cy.contains('h2', 'Startupds').click();


    
    // Check the URL after clicking the link
    cy.url().should('include', 'avtorski/');
  });
  