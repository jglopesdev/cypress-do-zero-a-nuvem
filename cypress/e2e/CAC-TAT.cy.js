describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('João Gabriel de Santana Lopes - ', 10)
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('contato@jglopes.dev')
    cy.get('#open-text-area').type(longText, {delay: 0} )
    cy.get('button[type=submit]').click()
    cy.get('.success').should('be.visible')
  })
  it.only('exibe mensagem de erro ao submeter o formulario com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('contato2jglopes.dev')
    cy.get('#open-text-area').type('Um texto qualquer...')
    cy.get('button[type=submit]').click()
    
    cy.get('.error').should('be.visible')
  })
})
