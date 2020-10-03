export default class ExpectPage {
    // Verifier page connexion
    getExpectconnectionPage() {
        return cy.get('.SignIn--title').should('have.text', "Connexion");
    }
    // Verifier page Inscription
    getExpectSignInPage() {
        return cy.get('.SignIn--title').should('have.text', "Inscription");
    }
    // Verifier page déposer annonce
    getExpectPublishPage() {
        return cy.get('.Publish--title').should('have.text', "Déposer une annonce");
    }
    
    getExpectSearchPage() {
        return cy.get('label').should('have.text', "Tri: ");
    }
    getExpectInfoPage() {
        return cy.get('.MyProfile--container > div > :nth-child(2)');
    }
    getExpectAnnoncePage() {
        return cy.get('.Offer--account-label').should('have.text', "Vendeur");
    }
    getExpectCartPage() {
        return cy.get('h2').should('have.text', "Mon panier");
    }
    getExpectTitleLastOffer() {
        return cy.get('.Offers--offer-title').eq(0);
    }
    getExpectPriceLastOffer() {
        return cy.get('.Offers--offer-price').eq(0);
    }
    getExpectDisplayOffer() {
        return cy.get('.Offer--addCart');
    }
}