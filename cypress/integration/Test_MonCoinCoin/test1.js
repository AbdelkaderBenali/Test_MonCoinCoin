describe.skip("Connexion au site", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto32";
    it("Connexion site MonCoinCoin", () => {
        // Visiter le site
        cy.visit(url);       
    });


    it("Modifier une annonce", () => {
        // Cliquer sur l'annonce
        cy.get('.Offers--offer').click();
        // Vérification de la page
        cy.get('.Offer--addCart').should('have.text', " Supprimer ");
        // Modifier le titre d'une annonce
        cy.get('#EditTitle').click();
        // Verifier l'ouverture Pop-up
        cy.get('.NotConnected--header > :nth-child(1)').should('have.text', "Modifier l'Offre");
        // Effacer le contenu des champs avant de faire une saisie puis valider
        cy.get('.Publish--input-title').clear().type("Super ballon de Handball neuf");
        cy.get('.NotConnected--footer-connect').click();
        // Modifier le prix
        cy.get('#EditPrice').click();
        cy.get('.NotConnected--header > :nth-child(1)').should('have.text', "Modifier l'Offre");
        cy.get('.Publish--input-price').clear().type('15');
        // Vérifier la modification du prix et du titre

    });
})
