describe('API Router', () => {
  const baseUrl = 'http://localhost:3000';

  it('GET /api/users', () => {
    cy.request(`${baseUrl}/api/users`).its('body').should('be.an', 'array');
  });

  it('GET /api/user/:id success', () => {
    cy.request(`${baseUrl}/api/user/1`).its('status').should('eq', 200);
  });

  it('GET /api/user/:id 404', () => {
    cy.request({
      url: `${baseUrl}/api/user/999`,
      failOnStatusCode: false,
    })
      .its('status')
      .should('eq', 404);
  });

  it('POST /api/set-user', () => {
    cy.request('POST', `${baseUrl}/api/set-user`, {}).its('body').should('eq', 'ok');
  });
});
