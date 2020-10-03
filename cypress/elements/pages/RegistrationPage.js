export default class RegistrationPage {
    getEmail () {
        return cy.get('[name="email"]').clear();
    }
    getUser() {
        return cy.get('.SignIn--email').eq(1).clear();
    }
    getPassword () {
        return cy.get('.SignIn--password').clear();
    } 
    
    getSubmit () {
        return cy.get('.SignIn--submit');
    } 
}