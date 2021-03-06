/* global describe cy before it  */
describe('Guards', () => {
  before(() => {
    cy.visit('routed-app-guards')
  })

  it('has rendered the home page', () => {
    cy.get('#router-outlet')
      .should('contain.text', 'Welcome to the home page!')
  })

  it('home page navigation is active', () => {
    cy.get('button.active')
      .should('have.text', 'Home')
  })

  describe('route to page one', () => {
    before(() => {
      cy.get('button:nth-of-type(2)').click()
    })

    it('has rendered page one', () => {
      cy.get('#router-outlet')
        .should('contain.text', 'Welcome to page one!')
    })

    it('page one navigation is active', () => {
      cy.get('button.active')
        .should('have.text', 'Page one')
    })
  })

  describe('route to cancelled page', () => {
    before(() => {
      cy.get('button:nth-of-type(3)').click()
    })

    it('has remained on page one', () => {
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/test/e2e/routed-app-guards/one')
      })
    })
  })

  describe('route to error page', () => {
    before(() => {
      cy.get('button:nth-of-type(4)').click()
    })

    it('has rendered an error', () => {
      cy.get('#router-outlet')
        .should('contain.text', 'An error occurred: Action error')
    })
  })
})
