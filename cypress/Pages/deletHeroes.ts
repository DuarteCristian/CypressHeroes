class deletHeroes {
    selectorsList() {
        const selectors = {
            deleteButton: '[data-cy="trash"]',
            buttonYes: '.text-white',

        }
        return selectors;
    }
    deletHeroes() {
        cy.contains('Capitão América').parent().find(this.selectorsList().deleteButton).click()
        // cy.get(this.selectorsList().deleteButton).eq(0).click();
        cy.get(this.selectorsList().buttonYes).eq(1).click();

    }
}
export default deletHeroes