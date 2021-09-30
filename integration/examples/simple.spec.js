describe('Visit the book scraping website', () => {
    it('True should be True', () => {
        cy.visit('https://books.toscrape.com/');
        cy.url().should('contain', 'toscrape');
    });
});

describe('should click Olio book', () => {
    it('should load correct url', () => {
        
        //cy.get('.gLFyf').type('Automation Step by Step{enter}');
        cy.contains('Poetry').click();
        cy.get('a').contains('Olio').click();
        
    });

    it('Should check price', () => {
        cy.get('.product_main > .price_color').contains('23.88');
    })
});