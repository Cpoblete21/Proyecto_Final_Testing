describe('Crear un nuevo artículo', () => {
  beforeEach(() => {
    cy.login();
    cy.contains('div.cursor-pointer', 'Entidades').click();
    cy.contains('a', 'Artículos').click();
    cy.url().should('include', '/articulos');
  });

  it('Debería crear un nuevo artículo y mostrarlo en el listado', () => {
    cy.contains('button', 'Crear Artículo').click(); 

    // Completar formulario 
    cy.get('input[name="name"]').type('Iphone 16');
    cy.get('input[name="sku"]').type('SKU1212321');
    cy.get('input[name="cost_price"]').clear().type('1000');
    cy.get('input[name="stock_quantity"]').clear().type('333');
    cy.get('input[name="sale_price"]').clear().type('1222');
    cy.get('select[name="unit"]').select('Unidad');

    // Guardar
    cy.contains('button', 'Guardar').click();

    //confirmar toast de exito
    cy.contains('.Toastify__toast', 'Articulo "Iphone 16" creado con éxito!', { timeout: 10000 });


    // asegeurandose que exista el nuevo articulo creado en la tabla 
    cy.get('div.space-y-2').should('contain.text', 'SKU1212321');
  });

  
});