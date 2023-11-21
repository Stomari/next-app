/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of beers', () => {
    cy.get('[data-testid=beers-list] li').should('have.length.at.least', 25);
  });

  it('navigates to the selected beer page', () => {
    cy.get('[data-testid=beers-list] li').first().as('firstBeerCard');
    cy.get('@firstBeerCard').click();
    cy.location('pathname').should('include', 'beer');
  });
});
