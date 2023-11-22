describe('Home', () => {
  it('navigates to the selected beer page', () => {
    cy.visit('/');

    cy.get('[data-testid=beers-list] a').first().as('firstBeerCard');
    cy.get('@firstBeerCard').click();
    cy.get('@firstBeerCard').then(($element) => {
      const href = $element[0].getAttribute('href');
      const beerName = $element.find('h1').text();

      cy.location('pathname').should('eq', href);
      cy.contains(beerName);
    });
  });

  it('goes back to the Home page when clicking "Back to Home" button', () => {
    cy.visit('/beer/1');

    cy.get('[data-testid=header-back]').click();

    cy.location('pathname').should('eq', '/');
  });
});
