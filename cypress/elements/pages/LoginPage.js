export default class LoginPage {
    getEmail () {
        return cy.get('.SignIn--email').clear();
    }
    
    getPassword () {
        return cy.get('.SignIn--password').clear();
    } 
    
    getSubmit () {
        return cy.get('.SignIn--submit');
    } 
}