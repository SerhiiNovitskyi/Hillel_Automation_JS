/// <reference types="cypress" />

// import { access } from "fs"
import { faker } from "@faker-js/faker"



// ENV_URL=http://5.189.186.217 npm run cy:run_chrome -- --spec cypress/e2e/custom_scenarios/newborn.cy.js

describe('login with api request', () => {
    const BaseUrl = Cypress.env('newbornUrl')
    Cypress.config('baseUrl', BaseUrl)

    beforeEach (() => {
        cy.loginAndSetLocalStorage()

    })
    it ('send login data', () => {
        cy.visit('/overview')
        cy.get('h4[_ngcontent-c1]').should('be.visible')
  })

  it('Create Category', () => {
    let categoryName = faker.commerce.product()
    cy.createNewCategory(categoryName)
    cy.task('log', categoryName)
    cy.visit('/categories')
    cy.wait(10000)
    cy.get('.content a.collection-item',).should('be.visible')
  })



   // Fetch the created category using the second GET request
  //  it('Check Created Category', () => {
  //      // Wait for the category creation to complete before making the second request
  //   cy.wait(2000) // Adjust the wait time based on your application's responsiveness
  //   // Fetch the created category using the custom Cypress command
  //  cy.request({
  //     method: 'GET',
  //     url: `http://5.189.186.217/api/category/${Cypress.env('categoryId')}`,
  //     headers: {
  //       'accept': 'application/json, text/plain, */*',
  //       'accept-language': 'en-GB,en;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk-UA;q=0.6,uk;q=0.5,en-US;q=0.4',
  //       'authorization': localStorage.getItem('auth-token'),
  //       'Referer': `http://5.189.186.217/categories/${Cypress.env('categoryId')}`,
  //       'Referrer-Policy': 'strict-origin-when-cross-origin',
  //     },
  //   }).then((getResponse) => {
  //       // Assert that the fetched category ID matches the expected one
  //       expect(getResponse.body._id).to.equal(Cypress.env('categoryId'));
  //   });
  //   // Additional assertions or tests can be added as needed
  // })

  it('Compare Category IDs', () => {
    // Fetch the created category using the custom Cypress command
    cy.compareCategoryID().then((getResponse) => {
      // Assuming the response contains the fetched category's ID
      const fetchedCategoryId = Cypress.env('categorySetId')
      const createdCategoryId = Cypress.env('categoryId')

      // Assert that the fetched category ID matches the created one
      expect(fetchedCategoryId).to.equal(createdCategoryId)
    })
    // Additional assertions or tests can be added as needed
  })


  it('Create Product For Category', () =>{
    let productName = faker.commerce.productName()
    cy.createProduct(productName)
    cy.task('log', productName)
    cy.visit(`/categories/${Cypress.env('categoryId')}`)
    cy.get('a.collection-item span').eq(0)
      .should('be.visible')
      .contains(productName)
  })

  it('Remove Category by ID', () =>{
    cy.removeCategoryId()
    cy.visit(`/categories/${Cypress.env('categoryId')}`)
      .should('not.be.visible')

})

it('Pause for check', () =>{
  cy.pause()
})

}) 
  

