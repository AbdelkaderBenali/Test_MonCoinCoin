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
    // Verifier la page perso
    getExpectPersonalPage() {
        return cy.get('.Header--user');
    }
    // Verifier la page recherche d'offres
    getExpectSearchPage() {
        return cy.get('label').should('have.text', "Tri: ");
    }
    // Verifier la page Mes infos
    getExpectInfoPage() {
        return cy.get('.MyProfile--container > div > :nth-child(2)');
    }
    // Verifier la page Mes annonces (idem que getExpectDisplayOffer)
    getExpectDetailOffertPage() {
        return cy.get('.Pages--currentPage').should('contain', "Page ");
    }
    // Verifier la page Mon panier
    getExpectCartPage() {
        return cy.get('h2').should('have.text', "Mon panier");
    }
    // Verifier le titre du 1ere offre de la recherche
    getExpectTitleLastOffer() {
        return cy.get('.Offers--offer-title').eq(0);
    }
    // Verifier le prix du 1ere offre de la recherche
    getExpectPriceLastOffer() {
        return cy.get('.Offers--offer-price').eq(0);
    }
    // Verifier la page d'une offre (idem que getExpectDetailOffertPage)
    getExpectDisplayOffer() {
        return cy.get('.Offer--date').should('contain', "Publiée le ");
    }
}