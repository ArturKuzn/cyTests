class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('https://automationteststore.com/');
    }

    getLoginOrRegisterButton(){
        return cy.contains('a', 'Login or register');
    }
}
export default new HomePage();