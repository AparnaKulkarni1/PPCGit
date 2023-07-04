describe('CSSLocators', () => {

    it('T1', () => {

      cy.visit('http://automationpractice.pl/index.php')

      cy.get("#search_query_top").type("T-Shirts") // CSS
      
      cy.get("button[name='submit_search']").click() //CSS

      cy.get(".lighter").contains("T-Shirts") //Assertion CSS
      
    })
  }) 