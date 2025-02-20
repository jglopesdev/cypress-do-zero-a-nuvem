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
  it('exibe mensagem de erro ao submeter o formulario com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('contato2jglopes.dev')
    cy.get('#open-text-area').type('Um texto qualquer...')
    cy.get('button[type=submit]').click()

    cy.get('.error').should('be.visible')
  })
  it('campo telefone continua vazio quando preenchido com valor não-numérico', () => {
    cy.get('#phone')
      .type('abcdef')  
      .should('have.value', '')
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulario', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('contato@jglopes.dev')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Um texto qualquer...')
    cy.get('button[type=submit]').click()
    
    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('João')
      .should('have.value', 'João')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Lopes')
      .should('have.value', 'Lopes')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('contato@jglopes.dev')
      .should('have.value', 'contato@jglopes.dev')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('13996006869')
      .should('have.value', '13996006869')
      .clear()
      .should('have.value', '')
  })
  it('exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatórios', () => {
    cy.get('button[type=submit]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('envia o formulario com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'João',
      lastName: 'Lopes',
      email: 'contato@jglopes.dev',
      textArea: 'Um texto qualquer para testar'
    }


    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  })
})
