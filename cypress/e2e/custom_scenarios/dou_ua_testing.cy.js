import { users } from "../../cypress/data/dou_data/search_text.js";

// example of parametrized test
// command for test
// ENV_URL=https://dou.ua npm run cy:run_chrome_headed -- --spec cypress/e2e/custom_scenarios/ddt.cy.js

for (const {id, searchVal} of users) {
    it.skip(`${id} check search`, () => {
        cy.visit('/')
        cy.get('input#txtGlobalSearch').click()
        .type(`${searchVal}{enter}`)
        cy.url().should('contain', searchVal)
    })
}
