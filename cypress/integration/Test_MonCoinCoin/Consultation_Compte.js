import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';
import InfosPage from '../../elements/pages/InfosPage';

describe("5- Consultation compte", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";

    let homePage = new HomePage();
    let infosPage = new InfosPage();
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

    it("5.1- Consulter son compte", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "Se Connecter" du "Header"
        homePage.butonConnectionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion();

        // Accèder à ses infos via le bouton "Panier" (le bouton username est masqué par le logo !!!!!)
        myAccountPage.getButonCart().click();
        // Vérifier la page
        infosPage.expectMyCartPage();
        // Cliquer sur le menu : Mes infos
        infosPage.getMenuMesInfos().click();
        // Vérifier la page
        infosPage.expectMesInfosPage();
        // Cliquer sur le menu : Mes annonces
        infosPage.getMenuMesAnnonces().click();
        // Vérifier l'affichage de la dernière annonce publiée
        //expectPage.getExpectTitleLastOffer().should('have.text', "Super ballon de Handball neuf");
        //expectPage.getExpectPriceLastOffer().should('have.text', "19 €");
    });
})