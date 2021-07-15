// import {add} from 
let {add} = require('../../src/add.js')

describe('My First Test', () => {
    it('Does not do much!', () => {
      // expect(true).to.equal(true)
      expect(add(1, 2)).to.equal(3)
    })
    it('Does not do much!', () => {
      expect(add(1, 2)).to.equal(4)
    })
    // it('Visits the Kitchen Sink', () => {
    //   cy.visit('https://example.cypress.io')
    // //   cy.pause()
    //   cy.contains('type').click()
    //   cy.url().should('include', '/commands/actions')
    //   cy.get('.action-email')
    //     .type('fake@email.com')
    //     .should('have.value', 'fake@email.com')
    // })
})