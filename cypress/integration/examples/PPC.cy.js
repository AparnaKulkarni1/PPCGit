describe('PPC', function() 
{
    it('Creation of vendor item ', function() 
    {

      cy.on('uncaught:exception', (e) => {
            return false
          })
      //visit the url  
      cy.visit("https://purchasingpowerds.riversand.com/")

      // Enter the username
      cy.get("input[id='1-email']").type('purchasingpowerds.systemadmin@riversand.com')

      // Enter the password
      cy.get('input[type="password"]').type('TX2eD3k5tf^5')

      // Submit the login
      cy.get('.auth0-label-submit').click()
      cy.wait(25000);
      cy.url().should('include',"purchasingpower")
  
      //Click on Quick Actions
      cy.wait(5000);
      cy.get('#pageMenuIcon_0').click()

      //Create Vendor Item
      cy.get('pebble-popover:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3)').click()

      //Web Name
      cy.wait(10000);
      cy.get("[id='input-2'] input").type('DemoWeb0',{force: true})
      //UPC
      cy.get("input[autocomplete='off']").eq(1).type('UPCDemoWeb0',{force: true})
      //Mfg
      cy.get("input[autocomplete='off']").eq(0).type('MfgDemoWeb0',{force: true})
      //Brand
      cy.get('.tags-container').eq(2).click({ multiple: true })
      cy.wait(1000);
      //cy.get('[id="searchbox"][class="p-relative without-select-all-checkbox"]').find('[id="input"][placeholder="Search"]').click({force:true}).type('14K')
      cy.get('[class="item item-list"][on-tap="_onTap"]').find('[title="14K"][class="lov-title-container "]').click({force:true})
      //Navigation Taxonomy (Master)
      cy.get('.tags-container').eq(1).click({ multiple: true })
      cy.wait(10000);
      cy.get('div[class="input-panel"] input[id="input"]').type('Air Conditioners{enter}',{force: true})
      cy.wait(10000);
      cy.get('pebble-icon[id="toggle-icon"]').click({ multiple: true })
      cy.wait(3000);
      //select
      // cy.get('paper-buttondiv[id="simpleButton"] div[class="text-ellipsis"]').click({ multiple: true })
      cy.get('[class="text-ellipsis"][title="Select"]').contains("Select").click({force:true})
      //Vendor Name/Vendor ID
      cy.get('.tags-container').eq(0).click({ multiple: true })
      cy.get('.not-only-option').eq(2).click({ multiple: true })
      cy.pause()
      //Create
      cy.wait(5000);
      cy.get('div[id="buttonTextBox"][class="text-ellipsis"][title="Create"]').contains("Create").click({force:true})
      cy.wait(5000);
      //Next
      cy.get('div[class="text-ellipsis"][title="Next"]').contains("Next").click({force:true})
      //Show me the entity
      cy.get('div[class="text-ellipsis"]title="Show me the entity"]').contains("Show me the entity").click({force:true})
      cy.pause()
      //Incomplete Mandatory Attributes - Vendor Item
      cy.get('div[class="text-ellipsis entity-content-name"][title="Next"]').click({force:true})
    
    
      



      cy.pause()
    })
})       