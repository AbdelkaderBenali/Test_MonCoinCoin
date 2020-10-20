import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import PublishPage from '../../elements/pages/PublishPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';

describe("3- Déposer une annonce", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";

    let homePage = new HomePage();
    let publishPage = new PublishPage();
    let loginPage = new LoginPage();
    let myAccountPage = new MyAccountPage();

    const publishOffer = (p) => {
        // DEPOSER UNE ANNONCE // Cliquer sur le bouton "Déposer une annonce"
        homePage.butonDeposerAnnonce().click();
        // Vérifier la page déposer une annonce
        publishPage.expectPublishPage();
        // Effacer le contenu des champs avant de faire une saisie
        publishPage.getPublishTitle().type("Ballon de Handball")
        publishPage.getPublishDescription().type("Ballon de Handball neuf en très bonne état")
        publishPage.getPublishPrice().type("19")
        // Télécharger le fichier (photo)
        const ballon = 'Ballon_Basket.jpg' ;   
        publishPage.getPublishFile().attachFile(ballon) ;
        // Valider
        publishPage.getPublishSubmit().click();
        // Vérification de la page
        myAccountPage.getExpectPersonalPage().should('have.text', `${user}`)
    }
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


    it("3.1- Déposer une annonce sans être connecté", ()=>{
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton publier une annonce
        homePage.butonDeposerAnnonce().click();
        // Vérifier l'ouverture d'une Pop-up
        cy.get('.NotConnected--body').should('have.text', "Vous devez être connecté(e) pour publier une annonce");
        // Interagir avec la Pop-up pour la fermer 
        cy.get('.NotConnected--footer-close').click();
        // Verifier la page
        cy.get('.Home--slogan').should('have.text', "<< Le coin des bonnes affaires ! >>")
    });

    it("3.2- Déposer une annonce en étant connecté", () =>{
        // SE CONNECTER // Visiter le site
        cy.visit(url);    
        homePage.butonConnectionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion();
        publishOffer();
        
    });
});