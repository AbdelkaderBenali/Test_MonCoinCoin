export default class HomePage {
    // Cliquer sur bouton "Se Connecter" du "Header"
    getButonConnexionHeader () {
        return cy.get('.Header--signIn-button');
    }

    // Cliquer sur bouton Rechercher
    getButonRechercher () {
        return cy.get('.Header--search');
    }

    // Cliquer sur bouton "Déposer une annonce"
    getButonDeposerAnnonce () {
        return cy.get('.Header--publish');
    }

    // Cliquer sur bouton "Se Connecter" du "Home"
    getButonConnexionHome () {
        return cy.get('.Home--signIn');
    }

    // Cliquer sur bouton "Rechercher une offre" du "Home"
    getButonSearchOffers() {
        return cy.get('.Home--offers');
    }

    // Cliquer sur menu : Mes infos (page perso)
    getMenuMesInfos() {
        return cy.get(':nth-child(1) > a > span');
    }
    
    // Cliquer sur menu : Mes annonces (page perso)
    getMenuMesAnnonces() {
        return cy.get(':nth-child(2) > a > span');
    }
}
