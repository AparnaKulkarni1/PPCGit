describe('Test6 Suite', function() 
{
    it('Test6 case ', function() 
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      //mouse hover popups
      cy.get('div.mouse-hover-content').invoke('show')
      cy.wait(2000)
      cy.contains('Top').click()
      cy.url().should('include','top')


    })
  })       