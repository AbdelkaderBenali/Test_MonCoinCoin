import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';
import InfosPage from '../../elements/pages/InfosPage';

describe("6- Modification offre", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "user1";

    let homePage = new HomePage();
    let loginPage = new LoginPage();
    let myAccountPage = new MyAccountPage();
    let infosPage = new InfosPage();

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

    it("6.1- Modification annonce", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "Se Connecter"
        homePage.butonConnectionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion();
        // Accèder à ses infos via le bouton "Panier" (le bouton username est masqué par le logo !!!!!)
        myAccountPage.getButonCart().click();
        // Vérifier la page
        infosPage.expectMyCartPage();
        // Cliquer sur le menu : Mes annonces
        infosPage.getMenuMesAnnonces().click();
        // Vérifier l'affichage de la dernière annonce pibliée
        //expectPage.getExpectTitleLastOffer().should('have.text', "Voiture Citroen à vendre");
        //expectPage.getExpectPriceLastOffer().should('have.text', "1500 €");
        // Cliquer sur la première annonce
        cy.get(':nth-child(1) > .Offers--offer').click();
        // Vérification de la page
        cy.get('.Offer--addCart').should('have.text', " Supprimer ");
       
        // Modifier le titre d'une annonce
        cy.get('#EditPrice').click();
        // Verifier l'ouverture Pop-up
        cy.get('.NotConnected--header > :nth-child(1)').should('have.text', "Modifier l'Offre");
        // Effacer le contenu des champs avant de faire une saisie puis valider
        cy.get('.Publish--input-price').clear().type("1000");
        cy.get('.NotConnected--footer-connect').click();
        // Vérifier la modification du prix et du prix
    });
})