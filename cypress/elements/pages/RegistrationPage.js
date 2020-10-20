export default class RegistrationPage {

    // Verifier page Inscription
    expectSignInPage() {
        return cy.get('.SignIn--title').should('have.text', "Inscription");
    }

    // Vérifier le champ : E-mail
    getEmail () {
        return cy.get('[name="email"]').clear();
    }

    // Vérifier le champ : username
    getUser() {
        return cy.get('.SignIn--email').eq(1).clear();
    }

    // Vérifier le champ : password
    getPassword () {
        return cy.get('.SignIn--password').clear();
    }

    // Vérifier le bouton : S'inscrire
    getSubmit () {
        return cy.get('.SignIn--submit');
    } 
}