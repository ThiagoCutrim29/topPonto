describe('TopPonto', () => {
  beforeEach(() => cy.login())

  it('Logar no TopPonto', () => {
    //Iniciar batida de ponto
    cy.contains('.btn-registrar', 'REGISTRAR').click()

    cy.wait(1000)
    //Confirmar a batida de ponto
    cy.contains('.positive-text', 'Confirmar').click()

    cy.wait(1000)
    //Cancelar a batida de ponto
    //cy.get('.alert-button-role-cancel').click()

    // Logout TopPonto
    //cy.contains('.w100 >', 'Sair').click()
  })
})
