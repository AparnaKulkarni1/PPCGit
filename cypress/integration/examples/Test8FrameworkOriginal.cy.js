describe('Test8 Suite', function() 
{

  before(function() {
    // runs once all tests in the block
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
  }) 


it('Test8 case ', function() {

  cy.visit(Cypress.env('url')+"/angularpractice/")
            
cy.get('input[name="name"]:nth-child(2)').type(this.data.name) 
cy.get('select').select(this.data.gender)
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) 
cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click() 
cy.get('h4.card-title').each(($e1, index, $list) => {
if($e1.text().includes('Samsung Note 8'))
{
  cy.get('button.btn.btn-info').eq(index).click()
}
})  

    })
  })       