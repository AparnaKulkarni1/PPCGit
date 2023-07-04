describe('Test2 Suite', () => {
    it('Test2 case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').type('ca')
      cy.wait(2000);
      // parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').each(($el, index, $list) => {
      
      const textVeg=$el.find('h4.product-name').text() 
      if(textVeg.includes('Cashews'))
      {
      $el.find('button').click()  
      }
      })
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.get(':nth-child(14)').click()
      
      
            
    
    })
  })