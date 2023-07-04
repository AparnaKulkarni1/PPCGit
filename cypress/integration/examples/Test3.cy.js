describe('Test3 Suite', function() 
{
    it('Test3 case ', function() 
    {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      
      //Automate Checkboxes
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      //Selecting Multiple checkboxs 
      cy.get('input[type="checkbox"]').check(['option2','option3'])  
      
      //Handling Static Dropdown
      cy.get('select').select('option2').should('have.value','option2')
      
      //Handling Dynamic Dropdowns
      cy.get('#autocomplete').type('ind')
      //cy.get('#ui-id-39').click()
      cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()=='India')
        (
          $el.click()
        )

      })
      //Handling assertion
      cy.get('#autocomplete').should('have.value','India')

      //Handling Visible/Hiden objects on page
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').should('be.visible')
      cy.get('#show-textbox').click()

      //Handling Radio Buttons
      cy.get('[value="radio1"]').click().should('be.checked')



    })
  })       