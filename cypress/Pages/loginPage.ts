class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: 'button',
            userNameFiled: '[name="email"]',
            userPasswordField: "[name='password']",
            ButtonSubmit: '.text-white',
            alertMessage: '.text-red-500'

        }
        return selectors;
    }
    loginSuccess() {
        cy.get(this.selectorsList().loginButton).click();
        cy.get(this.selectorsList().userNameFiled).type('admin@test.com');
        cy.get(this.selectorsList().userPasswordField).type('test123');
        cy.get(this.selectorsList().ButtonSubmit).click();
    }
    loginFail() {
        cy.get(this.selectorsList().loginButton).click();
        cy.get(this.selectorsList().userNameFiled).type('admin@test.com');
        cy.get(this.selectorsList().userPasswordField).type('wrongpassword');
        cy.get(this.selectorsList().ButtonSubmit).click();
        cy.get(this.selectorsList().alertMessage).should('be.visible').and('contain', 'Invalid email or password');
    }
}

export default LoginPage