describe('Editar un articulo existente', () => {
  beforeEach(() => {
    cy.login();
    cy.contains('div.cursor-pointer', 'Entidades').click();
    cy.contains('a', 'Artículos').click();
    cy.url().should('include', '/articulos');
  });

  it('Debería actualizar el artículo "Iphone 16" a "Iphone 16 Pro Max"', () => {
    // Buscar el artículo por su SKU para mas precision 
    cy.get('main').scrollTo('bottom');
    cy.contains('td', 'SKU1212321').scrollIntoView({ duration: 2000 });


    cy.contains('td', 'SKU1212321')
      .parent('tr') 
      .within(() => {
        cy.get('svg').eq(0).click({ force: true });// edita via icono 
      });
    
    // formulario de edit 
    cy.get('input[name="name"]').clear().type('Iphone 16 Pro Max');
    cy.get('input[name="sku"]').clear().type('SKU232323232');
    cy.get('input[name="cost_price"]').clear().type('2000');
    cy.get('input[name="stock_quantity"]').clear().type('333');
    cy.get('input[name="sale_price"]').clear().type('2222');
    cy.get('select[name="unit"]').select('Unidad');

      // Guardar
    cy.contains('button', 'Guardar').click();

    //confirmar toast de exito
    cy.get('.Toastify__toast', { timeout: 20000 })
      .should('contain.text', 'actualizado con éxito');




    // asegeurandose que exista el nuevo articulo creado en la tabla 
    cy.get('div.space-y-2').should('contain.text', 'SKU232323232');


      });
});