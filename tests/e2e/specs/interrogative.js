// https://docs.cypress.io/api/introduction/api.html

describe('Interrogative phrases are correct', () => {
  it('Interrogative phrases are correct', () => {
    cy.visit('/')
    cy.get('.select.phrase-form').select('interrogative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Did I chill?')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Was I chilling?')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Had I chilled?')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Had I been chilling?')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Do I chill?')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Am I chilling?')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Have I chilled?')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Have I been chilling?')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Will I chill?')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Will I be chilling?')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Will I have chilled?')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('Will I have been chilling?')
    })
  })
})
