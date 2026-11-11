describe('login',() => {
   beforeEach(() =>{
     cy.visit('https://www.saucedemo.com')
   })
    
    it ('entra com usuário e senha',() => {

   
    cy.get('[data-test="username"]').type('standard_user') 
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')


    })
    it('mostra erro para usuário bloqueado',() =>{ 

    cy.get('[data-test="username"]').type('locked_out_user') 
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','locked out')
    })
    it ('login com senha errada', () => {
    cy.get('[data-test="username"]').type('locked_out_user') 
    cy.get('[data-test="password"]').type('senha123')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','not match')
     })
   
     it('login com campos vazios',() => {
      cy.get('[data-test="username"]')
      cy.get('[data-test="password"]')
      cy.get('[data-test="login-button"]').click()
      cy.get('.error-message-container').should('contain', ' Username is required')
     })
   it('login com campo senha vazio', () => {
   cy.get('[data-test="username"]').type('locked_out_user') 
    cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain', 'Password is required')
   })
   
   
   })