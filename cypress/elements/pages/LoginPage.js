export default class LoginPage {
    
    // Verifier page connexion
    expectConnectionPage() {
        return cy.get('.SignIn--title').should('have.text', "Connexion");
    }

    // Localiser le champ : e-mail
    getEmail () {
        return cy.get('.SignIn--email');
    }
    
    // Localiser le champ : Mot de passe
    getPassword () {
        return cy.get('.SignIn--password');
    } 
    
    // Localiser le bouton : Se Connecter 
    butonSubmit () {
        return cy.get('.SignIn--submit');
    }

    // Localiser le bouton : Créer un compte
    butonCreerCompte() {
        return cy.get('.SignIn--signUp-submit');
    }
    
}