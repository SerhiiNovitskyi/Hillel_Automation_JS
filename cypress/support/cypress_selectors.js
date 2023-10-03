// Using cy.get() with a CSS Selector:
// // Select an element by its CSS selector
// cy.get('#element-id'); // Select by ID
// cy.get('.element-class'); // Select by class
// cy.get('input[name="username"]'); // Select by attribute
// cy.get('button[type="submit"]'); // Select by element type

// Using cy.contains() with Text:
// // Select an element containing specific text
// cy.contains('Submit'); // Selects any element containing the text 'Submit'
// cy.contains('.menu-item', 'About Us'); // Selects a specific element with text 'About Us'

// Using .first() and .last():
// // Select the first and last matching element
// cy.get('.list-item').first(); // Selects the first element
// cy.get('.list-item').last(); // Selects the last element

// Using .eq() by Index:
// // Select elements by index
// cy.get('ul li').eq(2); // Selects the third element (index 2)


// Using :first-child and :last-child Pseudo-Selectors:
// // Select the first and last child of a parent
// cy.get('ul li:first-child'); // Selects the first child
// cy.get('ul li:last-child'); // Selects the last child


// Using Attribute Selectors:
// // Select elements by their attributes
// cy.get('[data-testid="submit-button"]'); // Select by data-testid attribute

// Using Compound Selectors:
// // Combine multiple selectors
// cy.get('input[type="text"][name="username"]'); // Select by multiple attributes
// cy.get('.parent-class .child-class'); // Select nested elements


// Using XPath Selectors (if enabled):
// // Select elements using XPath
// cy.xpath('//button[contains(text(),"Submit")]'); // Select by XPath expression

