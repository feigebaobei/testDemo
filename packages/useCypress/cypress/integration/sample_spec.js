describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    //   cy.pause()
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })