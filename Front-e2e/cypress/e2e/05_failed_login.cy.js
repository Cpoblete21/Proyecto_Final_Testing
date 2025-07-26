describe('Acceso no autorizado', () => {
    beforeEach(() => {
    cy.webpage();
  });
  it('Debería indicar si las credenciales son incorrectas', () => {
    // Asegurarse de estar deslogueado
    cy.clearCookies();
    cy.clearLocalStorage();
    //Fake Credenciales 
    cy.get('#email').type('fake@test.com');
    cy.get('#password').type('Fakepassword');
    cy.get('button[type="submit"]').click();

    cy.contains('.Toastify__toast', 'Las credenciales proporcionadas son incorrectas.', { timeout: 1000 });
    

    // Intento de logeo sin email
    cy.get('#email').clear();
    cy.get('#password');
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/login');


     // Intento de logeo sin clave
    cy.get('#email').type('fake@test.com');
    cy.get('#password').clear();
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/login');

    // intento de logeo sin inputs
    cy.get('#email').clear();
    cy.get('#password').clear();
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/login');




    // intento de logeo sin email valido (formato)
    cy.get('#email').type('faketest.com');
    cy.get('#password').type('1232131312');
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', '/login');
  });
});




