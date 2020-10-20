export default class InfosPage {

    // Localiser le menu : Mes annonces (page perso)
    getMenuMesAnnonces() {
        return cy.get(':nth-child(2) > a > span');
    }

    // Localiser le menu : Mes infos (page perso)
    getMenuMesInfos() {
        return cy.get(':nth-child(1) > a > span');
    }

    // Localiser le menu : Mon panier (page perso)
    getMenuMonPanier() {
       // return cy.get(':nth-child(3) > a > span');
    }

    // Verifier la page Mes infos (le titre)
    expectMesInfosPage() {
        return cy.get('h2').should('have.text', "Mes infos");
    }

    // Verifier la page Mes annonces
    expectMyOffersPage() {
        return cy.get('label').should('have.text', "Tri: ");
    }

    // Verifier la page Mon panier (le titre)
    expectMyCartPage() {
        return cy.get('h2').should('have.text', "Mon panier");
    }

    // Localiser le bouton : Mon panier
    getButonCart() {
        return cy.get('.Cart--box');
    }
}
 