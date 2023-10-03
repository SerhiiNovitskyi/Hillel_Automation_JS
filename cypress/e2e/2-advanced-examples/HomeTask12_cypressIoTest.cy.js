describe('Cypress.io Website Test', () => {
    beforeEach(() => {
      // This code will run before each test case
      cy.visit('/');
    });
  
    it('should fill input fields and verify elements', () => {
      // Step 1: Find and click the "Get Started" button 
      cy.get('a[href="https://on.cypress.io"]')
      .contains('Documentation')
      .click();
  

      // Step 2: Verify the URL
      cy.url().should('contain', '/why-cypress');

  
      // Step 3: Find and check in the "Title" field
      cy.get('h1').should('contain.text','Why Cypress?');
      
  
      // Step 4: Find and click on the second 'Key Differences' tab into Overview DDL
      cy.get('a.menu__link[href*="key-differences"]').click();

  
      // Step 5: Check that 'Key Differences' Page is opened (check Tittle field)
      cy.get('h1').should('contain.text','Key Differences');
  
      // Step 6: Find and click the "Search" field
      cy.get('button.DocSearch.DocSearch-Button[type="button"][aria-label="Search"]').click();

      // Step 7: Find Search pop-up and fill text "Install"" for Searching
      cy.get('input#docsearch-input')
        .type('install') 
        .should('have.value', 'install'); // Verify the input value
    
  
      // Step 8: Verify successful submission message
      cy.get('li.DocSearch-Hit div.DocSearch-Hit-Container div.DocSearch-Hit-content-wrapper span.DocSearch-Hit-title')
        .should('include.text', 'Install');

  
      // Step 9: Verify that Search reaults page is opened after click on "See all results" button
      cy.contains('See all').click();

  
      // Step 10: Verify that there search results page is opened for "install" word 
      cy.get('h1').should('include.text', 'install');
    });
  });
  
  