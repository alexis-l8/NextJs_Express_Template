describe('Non existent routes', () => {
  it('Testing 404', () => {
    cy.visit('http://localhost:3000/fakeRoute', { failOnStatusCode: false })
    cy.contains('An error 404 occurred on server')
  })
})
