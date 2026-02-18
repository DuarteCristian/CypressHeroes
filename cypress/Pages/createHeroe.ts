class createHeroe {
    selectorsList() {
        const selectors = {
            createHeroeButton: '[href="/heroes/new"]',
            nameField: '[name="name"]',
            priceField: '[name="price"]',
            fanField: '[name="fans"]',
            saveField: '[name="saves"]',
            powerField: '[name="powers"]',
            droparImg: '[type="file"]',
            saveButton: 'button',
            heroeCard: '.bg-gray-50',
        }
        return selectors;
    }
    createHeroe() {
        cy.get(this.selectorsList().createHeroeButton).click();
        cy.get(this.selectorsList().nameField).type('Capitão América');
        cy.get(this.selectorsList().priceField).type('1000000');
        cy.get(this.selectorsList().fanField).type('1000000');
        cy.get(this.selectorsList().saveField).type('1000000');
        cy.get(this.selectorsList().powerField).select(4);
        cy.get(this.selectorsList().droparImg).selectFile('cypress/fixtures/capitao.jfif');
        cy.get(this.selectorsList().saveButton).eq(2).click();
        cy.get(this.selectorsList().heroeCard).contains('Capitão América').scrollIntoView().should('be.visible');
    }
}
export default createHeroe