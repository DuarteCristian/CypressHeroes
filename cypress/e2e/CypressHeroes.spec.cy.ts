//importação das páginas e arquivos necessários para os testes.
import createHeroe from "../Pages/createHeroe";
import LoginPage from "../Pages/loginPage";
import userData from "../fixtures/userData.json";
import 'cypress-file-upload';
import deletHeroes from "../Pages/deletHeroes";

const loginPage = new LoginPage();
const createHero = new createHeroe();
const deleteHero = new deletHeroes();

//teste de login, criação e deleção de herói, utilizando o mesmo usuário para os testes de criação e deleção, para garantir que o herói criado seja deletado.


//teste de login com sucesso.
describe('Login Success', () => {
  it('conseguir fazer o login com sucesso', () => {
    cy.visit('http://localhost:3000/')
    loginPage.loginSuccess();
  })
  //teste de login sem sucesso.
  describe('Login Fail', () => {
    it('não conseguir fazer o login com sucesso', () => {
      cy.visit('http://localhost:3000/')
      loginPage.loginFail();
    })

    //teste de criação  de herói.
    describe('Create Heroe', () => {
      it('conseguir criar um herói', () => {
        cy.visit('http://localhost:3000/')
        loginPage.loginSuccess();
        createHero.createHeroe();
      })
      //teste de deleção de herói.  
      describe('Delete Heroe', () => {
        it('conseguir deletar um herói', () => {
          cy.visit('http://localhost:3000/')
          loginPage.loginSuccess();
          deleteHero.deletHeroes();
        })
      })
    })
  })
})