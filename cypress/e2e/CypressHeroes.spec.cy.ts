import createHeroe from "../Pages/createHeroe";
import LoginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";
import 'cypress-file-upload';
const loginPage = new LoginPage();
const createHero = new createHeroe();

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

    describe('Create Heroe', () => {
      it('conseguir criar um herói', () => {
        cy.visit('http://localhost:3000/')
        loginPage.loginSuccess();
        createHero.createHeroe();
      })

    })
  })
})