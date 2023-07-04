describe('Test8.1 Suite', function() 
{
    
    before(function() {
      // runs once all tests in the block
      cy.fixture('example').then(function(data)
      {
this.data=data
      })
    }) 



it('Test8.1 case ', function() 
      {
        cy.visit(Cypress.env('url')+"/angularpractice/")
            
cy.get('input[name="name"]:nth-child(2)').type(this.data.name) 
cy.get('select').select(this.data.gender)
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) 
cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click()
cy.selectProduct('Samsung Note 8') 
cy.selectProduct('Blackberry')


    })
  })       