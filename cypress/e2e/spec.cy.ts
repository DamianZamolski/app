describe('spec.cy.ts', () => {
  it('should render Home', () => {
    cy.visit('localhost:1234');
    cy.contains('Home');
  });
});
