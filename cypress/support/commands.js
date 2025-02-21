Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'João',
    lastName: 'Lopes',
    email: 'contato@jglopes.dev',
    textArea: 'Um texto qualquer para testar'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.textArea)
    cy.contains('button', 'Enviar').click()
}) 