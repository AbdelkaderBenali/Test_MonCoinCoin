import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import ExpectPage from '../../elements/pages/ExpectPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';

describe("5- Consultation compte", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";
    let homePage = new HomePage();
    let loginPage = new LoginPage();
    let expectPage = new ExpectPage();
    let myAccountPage = new MyAccountPage();

    const connexion = (p)=>{
        // Verifier la page de connexion
        expectPage.getExpectconnectionPage();
        // Effacer le contenu des champs avant de faire une saisie
        loginPage.getEmail().type(`${user}@test.fr`);
        loginPage.getPassword().type("123456");
        loginPage.getSubmit().click();
        // Vérification de la page perso
        //expectPage.getExpectPersonalPage();
        p.get('.Header--user').should('have.text', `${user}`);
   }

    it("5.1- Consulter son compte", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "Se Connecter"
        homePage.getButonConnexionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion(cy);

        // Accèder à ses infos via le bouton "Panier" (le bouton username est masqué par le logo !!!!!)
        myAccountPage.getButonCart().click();
        // Vérifier la page
        expectPage.getExpectCartPage();
        // Cliquer sur le menu : Mes annonces
        homePage.getMenuMesAnnonces().click();
        // Vérifier l'affichage de la dernière annonce pibliée
        expectPage.getExpectTitleLastOffer().should('have.text', "Super ballon de Handball neuf");
        expectPage.getExpectPriceLastOffer().should('have.text', "19 €");
        // Cliquer sur la première annonce
        cy.get(':nth-child(1) > .Offers--offer').click();
        // Vérification de la page
        cy.get('.Offer--addCart').should('have.text', " Supprimer ");
       
        // Modifier le titre d'une annonce
        cy.get('#EditTitle').click();
        // Verifier l'ouverture Pop-up
        cy.get('.NotConnected--header > :nth-child(1)').should('have.text', "Modifier l'Offre");
        // Effacer le contenu des champs avant de faire une saisie puis valider
        cy.get('.Publish--input-title').clear().type("ballon de Handball neuf");
        cy.get('.NotConnected--footer-connect').click();
        
       /*  // Modifier le prix
        cy.get('#EditPrice').click();
        cy.get('.NotConnected--header > :nth-child(1)').should('have.text', "Modifier l'Offre");
        cy.get('.Publish--input-price').clear().type('15');
        // Vérifier la modification du prix et du titre */
    });
})