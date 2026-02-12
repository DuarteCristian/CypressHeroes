import LoginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";

const loginPage = new LoginPage();


describe('Login Success', () => {
  it('conseguir fazer o login com sucesso', () => {
    cy.visit('http://localhost:3000/')
    loginPage.loginSuccess();
  })

  describe('Login Fail', () => {
    it('não conseguir fazer o login com sucesso', () => {
      cy.visit('http://localhost:3000/')
      loginPage.loginFail();
    })
  })
})