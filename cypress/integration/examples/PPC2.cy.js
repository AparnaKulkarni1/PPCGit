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
      //cy.get('[id="labelAndInputContainer"][class="input-content label-is-hidden"]').eq(4).click({force: true})
      
      //Brand
      cy.get('.tags-container').eq(2).click({ multiple: true })
      cy.wait(3000);
      //cy.get('[id="searchbox"][class="p-relative without-select-all-checkbox"]').find('[id="input"][placeholder="Search"]').click({force:true}).type('14K')
      cy.get('[class="item item-list"][on-tap="_onTap"]').find('[title="14K"][class="lov-title-container "]').click({force:true})
      cy.wait(2000)
      
      //Navigation Taxonomy (Master)
      cy.pause()
      cy.get('.tags-container').eq(1).click({ multiple: true })
      cy.wait(7000);
      cy.get('div[class="input-panel"] input[id="input"]').type('Air Conditioners{enter}',{force: true})
      cy.wait(10000);
      cy.get('pebble-icon[id="toggle-icon"]').click({ multiple: true })
      cy.wait(5000);
      
      //select
      // cy.get('paper-buttondiv[id="simpleButton"] div[class="text-ellipsis"]').click({ multiple: true })
      cy.get('[class="text-ellipsis"][title="Select"]').contains("Select").click({force:true})
      //cy.pause()
      cy.wait(10000);
      
      //Vendor Name/Vendor ID
      cy.get('.tags-container').eq(0).click({ force: true })
      cy.get('.not-only-option').eq(2).click({ multiple: true })
      
      //Create
      cy.wait(5000);
      cy.get('div[id="buttonTextBox"][class="text-ellipsis"][title="Create"]').contains("Create").click({force:true})
      cy.wait(5000);
      
      //Next
      cy.get('div[class="text-ellipsis"][title="Next"]').contains("Next").click({force:true})
      
      //Show me the entity
      cy.wait(7000);
      cy.get('div[class="text-ellipsis"][title="Show me the entity"]').contains("Show me the entity").click({force:true})
      cy.pause()
      cy.wait(8000);
      
      //Incomplete Mandatory Attributes - Vendor Item
      cy.get('div[class="text-ellipsis entity-content-name"]').click({force:true})
      cy.pause()
      cy.wait(9000);

      //PRICING
      //Product Cost 
      cy.get('iron-input[id="input-21"] input').type('10.97',{force:true})
      //Comp Shop Price 
      cy.get('iron-input[id="input-22"] input').type('10.97',{force:true})
      //Shipping Length 
      cy.get('iron-input[id="input-23"] input').type('10.97',{force:true})
      //Shipping Width 
      cy.get('iron-input[id="input-24"] input').type('10.97',{force:true})
      //Shiping Height 
      cy.get('iron-input[id="input-25"] input').type('10.97',{force:true})
      //Shipping Weight 
      cy.get('iron-input[id="input-26"] input').type('10.97',{force:true})
      //Long Description 
      cy.get('iron-input[id="input-27"] input').type('10.97',{force:true})
      //Features 1
      cy.get('iron-input[id="input-28"] input').type('10.97',{force:true})
      //Features 2
      cy.get('iron-input[id="input-29"] input').type('10.97',{force:true})
      //Features 3
      cy.get('iron-input[id="input-30"] input').type('10.97',{force:true})
      //Features 4
      cy.get('iron-input[id="input-31"] input').type('10.97',{force:true})
      //Features 5
      cy.get('iron-input[id="input-32"] input').type('10.97',{force:true})
      //Main/Primary Image 
      cy.get('iron-input[id="input-33"] input').type('10.97',{force:true})
      //Secondary Image 
      cy.get('iron-input[id="input-34"] input').type('10.97',{force:true})
      //Tertiary Image 
      cy.get('iron-input[id="input-35"] input').type('10.97',{force:true})
      //Supplier Model # (Chub)/Vendor Number 
      cy.get('iron-input[id="input-36"] input').type('10.97',{force:true})
      
      //Ship Type 
      cy.get('div[title="Ship Type"]').next().click({ multiple: true })
      cy.wait(5000);
      cy.contains('Freight').click({force:true})
      cy.pause()
      
      //Comp Shop Date 
      cy.get('iron-input[id="input-37"] input').click()
      cy.wait(2000);
      cy.get('span[aria-label="July 8, 2023"]').click()
      cy.wait(5000);
      cy.get('div[class="attribute-group-container-wrapper full-height"]').click({ multiple: true })
      
      //save
      cy.contains('Save').click({ multiple: true })
      //('div[title="Save"][id="buttonTextBox"]')
      cy.pause()

      //Click on Summary tab
      cy.get('span[title="Summary"]').click({force:true})
      cy.pause()

      //Click on Approve Button
      cy.get('div[title="Approve"]').contains("Approve").click({force:true})

      cy.wait(5000);

      //To check 
      cy.get('span[title="Recent Activity"]').click({force:true})

      //Refresh button click after turing into red
      //cy.wait(7000);
      //cy.get('pebble-icon[class="button-icon"]').click({force:true})



      cy.pause()
    })
})