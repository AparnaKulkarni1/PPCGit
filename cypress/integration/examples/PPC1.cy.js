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
      cy.wait(10000);
      cy.get('#pageMenuIcon_0').click()

      //Create Vendor Item
      cy.get('pebble-popover:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3)').click()

      //Web Name
      cy.wait(5000);
      //cy.faker.seed(123); // Set a seed for consistent results (optional)
      //cy.get("[id='input-2'] input").type(cy.faker.random.alphaNumeric(8), { force: true })
      const randomnumber1 = Math.floor(Math.random()*(999))
      cy.get("[id='input-2'] input").type('DemoWeb'+randomnumber1,{force: true})

      //UPC
      const randomnumber2 = Math.floor(Math.random()*(999))
      cy.get("input[autocomplete='off']").eq(1).type('UPCDemoWeb'+randomnumber2,{force: true})

      //Mfg Number
      const randomnumber3 = Math.floor(Math.random()*(999))
      cy.get("input[autocomplete='off']").eq(0).type('MfgDemoWeb'+randomnumber3,{force: true})

      //Brand
      cy.get('.tags-container').eq(2).click({ multiple: true })
      cy.wait(5000);
      cy.get('[class="item item-list"][on-tap="_onTap"]').find('[title="14K"][class="lov-title-container "]').click({force:true})
      
      //Navigation Taxonomy (Master)
      cy.get('.tags-container').eq(1).click({ multiple: true })
      cy.wait(5000);
      cy.get('div[class="input-panel"] input[id="input"]').type('Air Conditioners{enter}',{force: true})
      cy.wait(10000);
      cy.get('pebble-icon[id="toggle-icon"]').click({ multiple: true })
      cy.wait(5000);
      
      //select
      // cy.get('paper-buttondiv[id="simpleButton"] div[class="text-ellipsis"]').click({ multiple: true })
      cy.get('[class="text-ellipsis"][title="Select"]').contains("Select").click({force:true})
      //cy.pause()
      
      cy.wait(12000);
      //Vendor Name/Vendor ID
      cy.get('.tags-container').eq(0).click({ multiple: true })
      cy.get('.not-only-option').eq(2).click({ multiple: true })
      
      //Create
      cy.wait(10000);
      cy.get('div[id="buttonTextBox"][class="text-ellipsis"][title="Create"]').contains("Create").click({force:true})
      
      //Next
      cy.wait(5000);
      cy.get('div[class="text-ellipsis"][title="Next"]').contains("Next").click({force:true})
      
      //Show me the entity
      cy.wait(10000);
      cy.get('div[class="text-ellipsis"][title="Show me the entity"]').contains("Show me the entity").click({force:true})
      //cy.pause()
      cy.wait(10000);
      
      //Incomplete Mandatory Attributes - Vendor Item
      cy.get('div[class="text-ellipsis entity-content-name"]').click({force:true})
      cy.pause()

      //              ***PRICING***
      //Product Cost
      cy.wait(9000);
      //cy.get('input[autocomplete="off"][autocorrect="off"]').click({force: true})
      cy.pause()
    })
})