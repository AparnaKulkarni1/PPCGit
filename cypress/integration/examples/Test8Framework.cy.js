import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"

describe('Test8 Suite', function() 
{
  before(function() {
    // runs once all tests in the block
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
  }) 

it('Test8 case', function() {
  const homePage=new HomePage()
  const productPage = new ProductPage()

 cy.visit("https://rahulshettyacademy.com/angularpractice/")
            
  homePage.getEditBox().type(this.data.name) 
  homePage.getGender().select(this.data.gender)
  homePage.getTwoWayDataBinding().should('have.value',this.data.name) 
  homePage.getEditBox().should('have.attr','minlength','2')
  homePage.getEnterpreneur().should('be.disabled')

  homePage.getShopTab().click() 

this.data.productName.forEach(function(element) {

  cy.selectProduct(element)
});
  productPage.CheckOutButton().click()
  var sum=0

  productPage.SumofProducts().each(($e1, index, $list) => {
  const amount=$e1.text()
  var res= amount.split(" ")
  res= res[1].trim()
  sum= Number(sum)+Number(res)

}).then(function()
{
   cy.log(sum)
})
  productPage.TotalAmount().then(function(element)
{
  const amount=element.text()
  var res= amount.split(" ")
  var total= res[1].trim()
  expect(Number(total)).to.equal(sum)
})

  productPage.Checkout().click()
  productPage.Country().type('India')
  cy.wait(7000);
  productPage.SelectIndia().click()
  productPage.TermsAndConditions().click({force: true})
  productPage.PurchaseButton().click()
  productPage.Sucess().then(function(element)
{
  const actualText=element.text()
  expect(actualText.includes("Success")).to.be.true
})




})
})       