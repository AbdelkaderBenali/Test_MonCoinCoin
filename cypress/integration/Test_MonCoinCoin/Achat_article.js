////<reference types="cypress-iframe" />

import HomePage from '../../elements/pages/HomePage';
import SearchPage from '../../elements/pages/SearchPage';
import OffreDetailPage from '../../elements/pages/OffreDetailPage';
import LoginPage from '../../elements/pages/LoginPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';


describe("Achat d'article", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "boris1";

    let homePage = new HomePage();
    let searchPage = new SearchPage();
    let offreDetailPage = new OffreDetailPage();
    let loginPage = new LoginPage();
    let myAccountPage = new MyAccountPage();

    const connexion = ()=>{
        // Verifier la page de connexion
        loginPage.expectConnectionPage();
        // Effacer le contenu des champs avant de faire une saisie
        loginPage.getEmail().clear().type(`${user}@test.fr`);
        loginPage.getPassword().clear().type("123456");
        loginPage.butonSubmit().click();
        // Vérification de la page perso
        myAccountPage.getExpectPersonalPage().should('have.text', `${user}`);
   };
    const recherche = () => {
        // Vérifier l'ouverture de la page de recherche
        searchPage.expectDetailOffertPage();
        // Effacer le contenu des champs avant de faire des saisies
        searchPage.getKeyword().clear().type('Ballon');
        // Borner sur le prix min et max
        searchPage.getPriceMin().clear().type('15');
        searchPage.getPriceMax().clear().type('20');
        // Trier sur les plus chères avec le menu déroulant
        searchPage.getSort().select('Plus chères');
        searchPage.butonSubmitRechercher().click();
    };

    it("Acheter un article", () => {
    
    // CONNEXION
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "connexion"
        homePage.butonConnectionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion();

    // RECHERCHER OFFRES
        // Cliquer sur le bouton Consulter les offres du "Home"
        homePage.butonSearchOffers().click();
        // Vérifier l'ouverture de la page de recherche
        searchPage.expectDetailOffertPage();
        // Appeler la fonction recherche
        recherche();

    // CONSULTER L'ANNONCE
        // Localiser le premier résultat affiché puis cliquer
        //searchPage.getFirstResult().click();
        cy.get(':nth-child(2) > .Offers--offer').click();
        // Verifier le résultat de la première annonce (presence du bouton "Ajouter au panier")
        offreDetailPage.expectDisplayOfferButon();

    // PROCEDER A L'ACHAT DE L'ARTICLE
        
        // Cliquer sur le bouton "Ajouter au panier"
        cy.get('.Offer--addCart').click();
        cy.get('.Offer--account'); // is being covered by another element:
        homePage.butonRechercher().click();
        // Cliquer sur le bouton panier
        cy.get('.Cart--box').click();
        // vérifier la page Mon panier
        cy.wait(2000) // Sans cette attente, le test échoue !
        // saisir les coordonnées banquaires
        // Noméro de la carte : Saisir le numéro
        cy.get('.__PrivateStripeElement > iframe').then($iframe => {
            const $body = $iframe.contents().find('#root')
        cy.wrap($body)
            .find('[name="cardnumber"]')
            .type('4242424242424242');
          });

        // Date d'expiration : Saisir la date d'expiration
        cy.get('.__PrivateStripeElement > iframe').then($iframe => {
        const $body = $iframe.contents().find('#root')          
        cy.wrap($body)
            .find('[name="exp-date"]')
            .type('1222');
          });

        // Code secret : Saisir le code
          cy.get('.__PrivateStripeElement > iframe').then($iframe => {
        const $body = $iframe.contents().find('#root')
        cy.wrap($body)
            .find('[name="cvc"]')
            .type('123'); 
        });

        // Code postal : Saisir le code postal
        cy.get('.__PrivateStripeElement > iframe').then($iframe => {
            const $body = $iframe.contents().find('#root')
            cy.wrap($body)
                .find('[name="postal"]')
                .type('78990'); 
            });

        // Cliquer sur le bouton "Valider mon panier"
        cy.get('.Pay--validate').click();

        // Vérifier l'ouverture de la Pop-Up confirmant le paiement
        cy.get('.NotConnected--body').should('have.text', "Paiement validé");    
    });   
});