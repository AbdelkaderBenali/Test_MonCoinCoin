
import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import MyAccountPage from '../../elements/pages/MyAccountPage';

describe("1- Connexion au compte perso", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";
    
    let homePage = new HomePage();
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

    it("1.1- Connexion depuis le 'Header' avec les bons identifiants", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "connexion"
        homePage.butonConnectionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion();   
    });

    it("1.2- Connexion depuis le 'Home' avec des identifiants erronés", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton : Se connecter du "Home" 
        homePage.butonConnectionHome().click();
        // Verifier la page de connexion
        loginPage.expectConnectionPage();
        // Effacer le contenu des champs avant de faire une saisie : mdp erroné
        cy.get('.SignIn--email').clear().type(`${user}@test.fr`);
        cy.get('.SignIn--password').clear().type("abcd");
        cy.get('.SignIn--submit').click();
        // verifier l'ouverture de la Pop-up
        cy.get('.NotConnected--body').should('have.text', "Identifiant et/ou mot de passe incorrect(s)");
        // réessayer pour accèder à la page de connexion
        cy.get('.NotConnected--footer-close').click();
        // Verifier la page de connexion
        loginPage.expectConnectionPage();
        // Effacer le contenu des champs avant de faire une saisie : mail erroné
        cy.get('.SignIn--email').clear().type("neant@R.fr");
        cy.get('.SignIn--password').clear().type("123456");
        cy.get('.SignIn--submit').click();
        // verifier l'ouverture de la Pop-up
        cy.get('.NotConnected--body').should('have.text', "Identifiant et/ou mot de passe incorrect(s)");
        // réessayer pour accèder à la page de connexion
        cy.get('.NotConnected--footer-close').click();
        // Verifier la page de connexion
        loginPage.expectConnectionPage();
    });

    it("1.3- Connexion depuis le bouton 'Déposer une annonce'", () => {
        // Visiter le site
        cy.visit(url);    
        // Cliquer sur le bouton "Déposer une annonce"
        homePage.butonDeposerAnnonce().click();
        // Vérifier l'ouverture d'une Pop-up
        cy.get('.NotConnected--body').should('have.text', "Vous devez être connecté(e) pour publier une annonce");
        // Interagir avec la Pop-up pour cliquer sur le bouton se connecter (accèder à la page de connexion pour s'incrire)
        cy.get('.NotConnected--footer-connect').click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion(); 
    });
});