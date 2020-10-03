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
        // Cliquer sur le menu : Mes infos
        homePage.getMenuMesInfos().click();
        // Vérifier la page
        expectPage.getExpectInfoPage().should('have.text', `${user}`);
        // Cliquer sur le menu : Mes annonces
        homePage.getMenuMesAnnonces().click();
        // Vérifier l'affichage de la dernière annonce pibliée
        expectPage.getExpectTitleLastOffer().should('have.text', "Ballon de Handball");
        expectPage.getExpectPriceLastOffer().should('have.text', "19 €");
    });
})