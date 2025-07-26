describe('Eliminar un articulo Iphone 16 Pro Max existente', () => {
  beforeEach(() => {
    cy.login();
    cy.contains('div.cursor-pointer', 'Entidades').click();
    cy.contains('a', 'Artículos').click();
    cy.url().should('include', '/articulos');
  });
    it('Debería eliminar el articulo "Iphone 16 Pro Max"', () => {
    // Buscar el artículo por su SKU para mas precision 
    cy.get('main').scrollTo('bottom');
    cy.contains('td', 'SKU232323232').scrollIntoView({ duration: 2000 });


    cy.contains('td', 'SKU232323232')
      .parent('tr') 
      .within(() => {
        cy.get('svg').eq(1).click({ force: true });// eliminar via icono 
      });

      //confirmar toast de eliminacionm
    cy.contains('.Toastify__toast', 'Artículo eliminado con éxito.', { timeout: 10000 });
      // asegeurandose que no exista el articulo eliminado  
    cy.get('div.space-y-2').should('not.contain.text', 'SKU232323232');
  });
});
