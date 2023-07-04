describe('Test1 Suite', () => {
    it('Test1 case ', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').type('ca')
      cy.wait(2000);
      cy.get("[class='product']").should('have.length',4)
      // parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

      cy.get('.products').find('.product').each(($el, index, $list) => {
      
      const textVeg=$el.find('h4.product-name').text() 
      if(textVeg.includes('Cashews'))
      {
      $el.find('button').click()  
      }
      })

      //assert if logo text is correctly displayed
      cy.get('.brand').should('have.text','GREENKART')

      //this is to print in logs
      cy.get('.brand').then(function(logoelement)
      {
         cy.log(logoelement.text())
      })
      const logo=cy.get('.brand')
      //cy.log(cy.get('.brand')).text())
      //cy.log(logo.text())    
      
    
    })
  })