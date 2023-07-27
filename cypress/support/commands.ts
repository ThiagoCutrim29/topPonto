/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs in based on a username and password defined as environment variables.
     * @example cy.login()
     */
    login(): Chainable<string>
  }
}

Cypress.Commands.add('login', () => {
  cy.visit('/login')
  cy.get('#mat-input-0').type(Cypress.env('username'))
  cy.get('#mat-input-1').type(Cypress.env('password'), { log: false })
  cy.get('.ion-color-primary').click()
  cy.url({ timeout: 10000 }).should('contain','/ponto')

})