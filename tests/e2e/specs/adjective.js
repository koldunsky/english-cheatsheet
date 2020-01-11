// https://docs.cypress.io/api/introduction/api.html

describe('Adjective phrases are correct', () => {
  it('Adjective phrases are correct', () => {
    cy.visit('/')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I chilled')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I was chilling')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I had chilled')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I had been chilling')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I chill')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I am chilling')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I have chilled')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I have been chilling')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will chill')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will chilling')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will have chilled')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will have been chilling')
    })
  })
})
