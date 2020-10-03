export default class SearchPage {
    // Le champ : Que rechercher-vous
    getKeyword() {
        return cy.get('.Search--input').clear()
    }
     // Le champ : Prix min
    getPriceMin() {
        return cy.get('.Search--priceMin').clear()
    }
     // Le champ : Prix Max
    getPriceMax() {
        return cy.get('.Search--priceMax').clear()
    }
     // Le menu déroulant : Tri
    getSort() {
        return cy.get('#sort');
    }
    getButonSubmitRechercher() {
        return cy.get('.Search--button');
    }
    getFirstResult() {
        return cy.get('.Offers--offer').eq(0);
    }
}