
describe('positive test', () => {
    it('test1', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.title().should('eq', 'OrangeHRM')
    })
  }) 

describe('negative test', () => {
    it('test1', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.title().should('eq', 'OrangeHRM123')
    })
  }) 