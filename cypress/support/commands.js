// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
    cy.visit(url).timeout(5000)
    cy.setCookie(cookieN, cookieV)
})

Cypress.Commands.add('loginAndSetLocalStorage', () => {
    cy.request({
		method: 'POST',
		url: '/api/auth/login',
		body: {
			email: 'email@dmytro.com',
			password: 'abc123',
		},
	}).then((response) => {
		const accessToken = response.body.token;
		// Store the access token in localstrorage
		localStorage.setItem('auth-token', accessToken);
        // store the token in json
        
	});
})

Cypress.Commands.add('createNewCategory', (category) => {

	const accessToken = window.localStorage.getItem('auth-token')
	
	cy.request({
		method: 'POST',
		url: '/api/category',
		body: {
			name: category,

		},
		headers: {
			authorization: accessToken,
		}
	}).then((response) => {
		const categoryId = response.body._id;
		Cypress.env('categoryId', categoryId)	
		return response.body
	})

})

Cypress.Commands.add('compareCategoryID', () => {
	const accessToken = window.localStorage.getItem('auth-token');
	const categoryId = Cypress.env('categoryId');

	cy.request({
		method: 'GET',
		url: `/api/category/${Cypress.env('categoryId')}`,
		headers: {
			authorization: accessToken,
		}
	}).then((response) => {
		const categorySetId = response.body._id;
		Cypress.env('categorySetId', categorySetId)	
		return response.body
	})

})

Cypress.Commands.add('createProduct', (position) => {

    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request ({
        method: 'POST',
        url: '/api/position',
        body: {
            category: categoryId,
            cost: 1,
            name: position

        },
        headers: {
            authorization: accessToken,
        }
    }).then((response) =>{
        return response.body
    })
})


Cypress.Commands.add('removeCategoryId', ()=> {
    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request({
        method: 'DELETE',
        url: `/api/category/${categoryId}`,
        headers: {
            authorization: `${accessToken}`,
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })

})

