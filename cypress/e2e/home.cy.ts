describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the Home content correctly', () => {
    // Header title
    cy.contains('FullStack React with TypeScript').should('be.visible');

    // Description text
    cy.contains('starter kit to get you up and running').should('be.visible');

    // Image exists
    cy.get('img').should('have.attr', 'src').and('include', 'logo.png');

    // Medium link
    cy.contains('a', 'medium blog post').should('have.attr', 'href').and('include', 'medium.com');
  });
});
