describe('Fullstack App', () => {
  // This is the test suite
  it('loads homepage', () => {
    // This is the test case
    cy.visit('/');
    cy.contains('FullStack React with TypeScript'); // adjust to your UI
  });

  it('calls backend API', () => {
    //Another test case
    cy.request('http://localhost:3000/api/health').its('status').should('eq', 200);
  });
});
