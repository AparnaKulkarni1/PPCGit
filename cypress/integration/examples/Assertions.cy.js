describe('Assertions demo', () => {

    it('Implitcit', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      // should and
      cy.url().should('include','orangehrmlive.com')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('contain','orangehrm')
    
    })
  }) 