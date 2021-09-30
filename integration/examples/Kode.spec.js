describe('Practicing on Lets kode it', () => {
    it('Setting Time', () => {
        const date = new Date().getDate();
        cy.clock(date);
        cy.log(date);
    })

    it('screen manipulation & Visit Lets Kode It', () => {
        cy.viewport('samsung-note9');
        cy.visit('https://courses.letskodeit.com/practice');
        cy.url().should('contain','letskodeit');
    })

    it('Click check box', () => {
        cy.get('#bmwcheck').click();
    })
})