// https://docs.cypress.io/api/introduction/api.html

describe('Negative phrases are correct', () => {
  it('1st person', () => {
    cy.visit('/')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I did not chill')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I was not chilling')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I had not chilled')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I had not been chilling')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I do not chill')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I am not chilling')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I have not chilled')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I have not been chilling')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will not chill')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will not be chilling')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will not have chilled')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('I will not have been chilling')
    })
  })
  it('2nd person', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('you')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You did not chill')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You were not chilling')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You had not chilled')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You had not been chilling')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You do not chill')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You are not chilling')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You have not chilled')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You have not been chilling')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You will not chill')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You will not be chilling')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You will not have chilled')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('You will not have been chilling')
    })
  })
  it('3rd person', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('he/she/it')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It did not chill')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It was not chilling')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It had not chilled')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It had not been chilling')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It does not chill')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It is not chilling')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It has not chilled')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It has not been chilling')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It will not chill')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It will not be chilling')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It will not have chilled')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('It will not have been chilling')
    })
  })
  it('Plural', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('they')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They did not chill')
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They were not chilling')
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They had not chilled')
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They had not been chilling')
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They do not chill')
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They are not chilling')
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They have not chilled')
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They have not been chilling')
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They will not chill')
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They will not be chilling')
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They will not have chilled')
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq('They will not have been chilling')
    })
  })
})
