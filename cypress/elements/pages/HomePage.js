export default class HomePage {
    // Cliquer sur bouton "Se Connecter" du "Header"
    butonConnectionHeader () {
        return cy.get('.Header--signIn-button');
    }

    // Cliquer sur bouton Rechercher
    butonRechercher () {
        return cy.get('.Header--search');
    }

    // Cliquer sur bouton "Déposer une annonce"
    butonDeposerAnnonce () {
        return cy.get('.Header--publish');
    }

    // Cliquer sur bouton "Se Connecter" du "Home"
    butonConnectionHome () {
        return cy.get('.Home--signIn');
    }

    // Cliquer sur bouton "Consulter les offres" du "Home"
    butonSearchOffers() {
        return cy.get('.Home--offers');
    }

    // Verifier la page d'accueil (Logo)
    sloganHome() {
        return cy.get('.Home--slogan').should('have.text', "<< Le coin des bonnes affaires ! >>")
    } 
}
