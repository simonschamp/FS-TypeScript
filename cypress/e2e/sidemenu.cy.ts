describe('SideMenu core functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to Usage', () => {
    cy.contains('Usage').click();
    cy.url().should('include', '/usage');
  });

  it('navigates to Fetch', () => {
    cy.contains('Fetch').click();
    cy.url().should('include', '/fetch-example');
  });

  it('navigates to Lazy Loading', () => {
    cy.contains('Lazy Loading').click();
    cy.url().should('include', '/lazy-example');
  });

  it('navigates to Styled Components', () => {
    cy.contains('Styled Components').click();
    cy.url().should('include', '/styled-example');
  });

  it('navigates to React-Router', () => {
    cy.contains('React-Router').click();
    cy.url().should('include', '/router-example');
  });
});
