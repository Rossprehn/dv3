describe('Form submission', () => {
  it('Has a job application page', () => {
    cy.visit('https://dinosv3.herokuapp.com/')

    cy.get('#application-preview').should('be.hidden')
    cy.get('#preview-toggle').click()
    cy.get('#application-preview').should('not.be.hidden')
    cy.get('#application-preview').should('not.have.text')

    cy.get('#application-text').type('S')
    cy.get('#preview-toggle').click()
    cy.get('#application-preview').should('have.text', 'S')
    cy.get('#application-text').type('ay hello!')
    cy.get('#preview-toggle').click()
    cy.get('#application-preview').should('have.text', 'Say hello!')

    cy.get('#submit').click()
    cy.get('#application-text').should('not.have.text')
    cy.get('#application-preview').should('not.have.text')
    cy.get('#message').should('have.text', 'Your application was submitted!')
  })
})
