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
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulario com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('contato2jglopes.dev')
    cy.get('#open-text-area').type('Um texto qualquer...')
    cy.contains('button', 'Enviar').click()
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
    cy.get('#phone-checkbox').check()
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

  it('envia o formulario com sucesso usando um comando customizado', () => {
 
    cy.fillMandatoryFieldsAndSubmit({
      firstName: 'Murilo',
      lastName: 'Mendonça',
      email: 'murilinho@jglopes.dev',
      textArea: 'Um texto qualquer para testar'})

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })
  it('seleciona um produto (Blog) por seu indice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each((typeOfService) => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  it.only('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
})

