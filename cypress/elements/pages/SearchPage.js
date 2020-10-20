export default class SearchPage {

    // Verifier la page Recherche
    expectDetailOffertPage() {
        return cy.get('.Pages--currentPage').should('contain', "Page ");
    }

    // Localiser le champ : Que rechercher-vous
    getKeyword() {
        return cy.get('.Search--input');
    }

     // Localiser le champ : Prix min
    getPriceMin() {
        return cy.get('.Search--priceMin');
    }

     // Localiser le champ : Prix Max
    getPriceMax() {
        return cy.get('.Search--priceMax');
    }

     // Localiser le menu déroulant : Tri
    getSort() {
        return cy.get('#sort');
    }

    // Localiser le bouton Rechercher
    butonSubmitRechercher() {
        return cy.get('.Search--button');
    }

    // Localiser le premier résultat affiché
    getFirstResult() {
        return cy.get(':nth-child(1) > .Offers--offer');
    }
}