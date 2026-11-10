describe('compra', () => {
    beforeEach(() => {
cy.visit('https://www.saucedemo.com')
   cy.get('[data-test="username"]').type('standard_user') 
   cy.get('[data-test="password"]').type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
 })
 it('adiciona a mochila no carrinho',() => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '1')
})
it('finalizando compra',() => {
 cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
 cy.get('[data-test="shopping-cart-link"]').click()
 cy.get('[data-test="checkout"]').click()
 cy.get('[data-test="firstName"]').type('marcos')   
 cy.get('[data-test="lastName"]').type('vinicios') 
 cy.get('[data-test="postalCode"]').type('47740000')
 cy.get('[data-test="continue"]').click()
 cy.get('[data-test="finish"]').click()
cy.contains('Thank you for your order!').should('be.visible')

})




})