describe('Test4 Suite', function() 
{
    it('Test4 case ', function() 
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      //alert pop-ups
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()

      //window alert
      cy.on('window:alert',(str)=>
      {
        //mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
      
      cy.on('window:confirm',(str)=>
      {
        //mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

      //removeAttr - Jquery function
      cy.get('#opentab').invoke('removeAttr','target').click()
      
      cy.wait(2000)
      cy.url().should('include','qaclickacademy')
      
      cy.go('back')
          
    })
  })       