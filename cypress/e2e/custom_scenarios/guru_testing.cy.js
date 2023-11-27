/// <reference types="cypress" />

import MainPage from "../../pages/main";
import PostmanPage from "../../pages/postman_page";
import { global_data } from "../../data/global_text"
import { seleniumPage } from "../../pages/selenium_testing_page";

describe ('Testing Guru99 Website', () => {

    const mainpage = new MainPage()  
    const postmanpage = new PostmanPage()

    beforeEach(()=> {
        // cy.visit('https://www.guru99.com/');
        // cy.setCookie ('authCoka', 'someCooke')
        // const BaseUrl1 = Cypress.env('guruTestingUrl')
        // Cypress.config('baseUrl', BaseUrl1)
        cy.loginAndSetCookie('/', 'authCoka', 'someCookie')
    });

    it('open the website guru', () => {
        cy.get('h1.thick-heading',).should('be.visible') //correct syntax of timeout
        cy.url().then((currentUrl) => {
            cy.task('saveUrl', currentUrl)
        })
    })

    it('check search and validate result', () => {
        cy.get('button.search-toggle-open').should('be.visible')
        .and('have.attr', 'data-toggle-target', '#search-drawer')
        .click();
        cy.get('input.search-field').should('be.visible')
        .and('have.attr', 'type', 'search')
        .type('functional testing{enter}')
        cy.url().should('contain', '/search_gcse?q=functional+testing')
        cy.get('div#resInfo-0').should('not.be.empty')
        .and('contain', 'About')
    })
    it('click on software testing variant from dropdown list', () =>{
        cy.get('#primary-menu span.nav-drop-title-wrap').eq(0).click()
        // cy.get('ul.sub-menu.clicked').eq(1).should('be.visible')
         
        cy.get('ul.sub-menu.clicked li').eq(7).find('a')
        .should('have.attr', 'href', '/software-testing.html')
        .and('have.text', 'Software Testing', {timeout: 5000}).click()

        cy.get('div.code-block-1 + h2').should('contain', 'Software Testing Training Summary')
        .and('have.css', 'margin-top', '0px' )
        cy.getCookie('authCoka').should('exist')

        // cy.get ('p strong').then(($testFundamentalsElement) => {
        //     $testFundamentalsElement.text()
        //     cy.wait($testFundamentalsElement)     
        // })

        // cy.intercept('GET', '/software-testing').as('@pageForSoftwareTesting')
        // cy.wait('@pageForSoftwareTesting')


        cy.get ('p strong').eq(1).then(($testFundamentalsElement) => {
            cy.wrap($testFundamentalsElement).should('contain.text', 'Testing Fundamentals') 
        })
    })

    it('click on pstman link from dropdownlist POM', () => {
        mainpage.dropdownList().eq(0).click().pause()
        mainpage.elementindropdownlist().eq(16).should('have.text', global_data.postman_text).click()
        postmanpage.imagewithPostmanDetails({timeout: 10000}).should('be.visible')

    })

    it ('open the software from mainpage', () => {
        // cy.get('a[title="Software Testing"]').then (($liinkMainPage) => {
        //     debugger
        // })
        cy.visit('/software-testing.html')
        cy.log('Opened the soft testing page by link')
        // cy.get('h2').pause()
        cy.task('log', 'another message from JS code')
        cy.get('table.table').eq(0)

    })


    it('open Selenium page from main', () => {
        seleniumPage.clickLinkOnMainPage()
        cy.url().should('contain', '/selenium-tutorial.html')
    })
})

