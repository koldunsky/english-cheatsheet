// https://docs.cypress.io/api/introduction/api.html

describe('Negative phrases are correct', () => {
  it('Negative phrases are correct', () => {
    cy.visit('/')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I didn't chill`)
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I wasn't chilling`)
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I hadn't chilled`)
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I hadn't been chilling`)
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I don't chill`)
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I am not chilling`)
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I haven't chilled`)
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I haven't been chilling`)
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I won't chill`)
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I won't be chilling`)
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I won't have chilled`)
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`I won't have been chilling`)
    })
  })
})
