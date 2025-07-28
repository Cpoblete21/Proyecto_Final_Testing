describe('Login y Consultar Productos', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Debería iniciar sesión exitosamente con credenciales válidas y mostrar listado de articulos', () => { 
    cy.contains('div.cursor-pointer', 'Entidades').click();
    cy.contains('a', 'Artículos' ).click();
    cy.url().should('include', '/articulos');


    
    // asegeurandose que existan items en la tabla 
    cy.get('div.space-y-2').should('have.length.greaterThan', -1);
  });
  

});
