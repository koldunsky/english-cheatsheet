// https://docs.cypress.io/api/introduction/api.html

describe('Negative phrases are correct', () => {
  it('1st person', () => {
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
  it('2nd person', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('you')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You didn't chill`)
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You weren't chilling`)
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You hadn't chilled`)
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You hadn't been chilling`)
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You don't chill`)
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You are not chilling`)
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You haven't chilled`)
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You haven't been chilling`)
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You won't chill`)
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You won't be chilling`)
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You won't have chilled`)
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`You won't have been chilling`)
    })
  })
  it('3rd person', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('he/she/it')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It didn't chill`)
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It wasn't chilling`)
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It hadn't chilled`)
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It hadn't been chilling`)
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It doesn't chill`)
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It is not chilling`)
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It hasn't chilled`)
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It hasn't been chilling`)
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It won't chill`)
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It won't be chilling`)
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It won't have chilled`)
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`It won't have been chilling`)
    })
  })
  it('Plural', () => {
    cy.visit('/')
    cy.get('.select.pronoun').select('they')
    cy.get('.select.phrase-form').select('negative')
    // Past
    cy.get('.tense_past-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They didn't chill`)
    })
    cy.get('.tense_past-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They weren't chilling`)
    })
    cy.get('.tense_past-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They hadn't chilled`)
    })
    cy.get('.tense_past-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They hadn't been chilling`)
    })

    // Present
    cy.get('.tense_present-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They don't chill`)
    })
    cy.get('.tense_present-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They are not chilling`)
    })
    cy.get('.tense_present-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They haven't chilled`)
    })
    cy.get('.tense_present-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They haven't been chilling`)
    })

    // Future
    cy.get('.tense_future-simple .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They won't chill`)
    })
    cy.get('.tense_future-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They won't be chilling`)
    })
    cy.get('.tense_future-perfect .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They won't have chilled`)
    })
    cy.get('.tense_future-perfect-continuous .content').should(($div) => {
      expect($div.get(0).innerText).to.eq(`They won't have been chilling`)
    })
  })
})
