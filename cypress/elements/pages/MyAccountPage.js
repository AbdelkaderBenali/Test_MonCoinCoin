export default class MyAccountPage {
    // Vérifier le panier de la page perso
    getButonCart() {
        return cy.get('.Cart--box');
    }

    // Verifier le bouton du username de la page perso
    getExpectPersonalPage() {
        return cy.get('.Header--user');
    }

} 