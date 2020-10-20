export default class OffreDetailPage {
    
    // Verifier la page d'une offre avec le titre description
    getExpectDisplayOfferTitle() {
        return cy.get('.Offer--description').should('contain', "Description");
    }
    // Vérifier la page d'une offre avec le bouton "Ajouter au panier"
    expectDisplayOfferButon() {
        return cy.get('.Offer--addCart').should('have.text', " Ajouter au panier ");
    }
    
} 