describe('Test6 Suite', function() 
{
    it('Test6 case ', function() 
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      //Handling child windows and tabs
      cy.get('#opentab').then(function(el)
      {
        const url=el.prop('href')
        cy.visit(url)
        cy.origin(url, function()
        {
          cy.get('div.cen-align a[href="https://www.qaclickacademy.com"]').click()
        })

      })
      

    })
  })       