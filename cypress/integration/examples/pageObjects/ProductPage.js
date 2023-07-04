class ProductPage
{

CheckOutButton()
{
    return cy.get('.nav-link.btn.btn-primary')
}
SumofProducts()
{
    return cy.get('tr td:nth-child(4) strong')
}
TotalAmount()
{
    return cy.get('h3 strong')
}
Checkout()
{
    return cy.get("button[class='btn btn-success']")
}
Country()
{
    return cy.get('#country')
}
SelectIndia()
{
    return cy.get('.suggestions > ul > li > a')
}
TermsAndConditions()
{
    return cy.get('#checkbox2')
}
PurchaseButton()
{
    return cy.get("input[value='Purchase']")
}
Sucess()
{
    return cy.get('.alert')
}

}
export default ProductPage;