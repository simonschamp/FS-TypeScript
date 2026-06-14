describe('Header', () => {
  it('renders the header with title', () => {
    cy.visit('/');

    cy.contains('Fullstack TypeScript').should('be.visible');
  });
});
