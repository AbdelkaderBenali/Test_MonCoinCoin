import HomePage from '../../elements/pages/HomePage';
import LoginPage from '../../elements/pages/LoginPage';
import ExpectPage from '../../elements/pages/ExpectPage';

describe("1- Connexion au compte perso", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";
    
    let homePage = new HomePage();
    let loginPage = new LoginPage();
    let expectPage = new ExpectPage();

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
    };

    it("1.1- Connexion depuis le 'Header' avec les bons identifiants", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "connexion"
        homePage.getButonConnexionHeader().click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion(cy);   
    });

    it("1.2- Connexion depuis le 'Home' avec des identifiants erronés", () => {
        // Visiter le site
        cy.visit(url);    
        cy.get('.Home--signIn').click();
        // Verifier la page
        expectPage.getExpectconnectionPage();
        // Effacer le contenu des champs avant de faire une saisie : mdp erroné
        cy.get('.SignIn--email').clear().type(`${user}@test.fr`);
        cy.get('.SignIn--password').clear().type("abcd");
        cy.get('.SignIn--submit').click();
        // verifier l'ouverture de la Pop-up
        cy.get('.NotConnected--body').should('have.text', "Identifiant et/ou mot de passe incorrect(s)");
        // réessayer pour accèder à la page de connexion
        cy.get('.NotConnected--footer-close').click();
        // Verifier la page
        expectPage.getExpectconnectionPage();
        // Effacer le contenu des champs avant de faire une saisie : mail erroné
        cy.get('.SignIn--email').clear().type("neant@R.fr");
        cy.get('.SignIn--password').clear().type("123456");
        cy.get('.SignIn--submit').click();
        // verifier l'ouverture de la Pop-up
        cy.get('.NotConnected--body').should('have.text', "Identifiant et/ou mot de passe incorrect(s)");
        // réessayer pour accèder à la page de connexion
        cy.get('.NotConnected--footer-close').click();
        // Verifier la page
        expectPage.getExpectconnectionPage();
    });

    it("1.3- Connexion depuis le bouton 'Déposer une annonce'", () => {
        // Visiter le site
        cy.visit(url);    
        // Cliquer sur le bouton "Déposer une annonce"
        homePage.getButonDeposerAnnonce().click();
        // Vérifier l'ouverture d'une Pop-up
        cy.get('.NotConnected--body').should('have.text', "Vous devez être connecté(e) pour publier une annonce");
        // Interagir avec la Pop-up pour cliquer sur le bouton se connecter (accèder à la page de connexion pour s'incrire)
        cy.get('.NotConnected--footer-connect').click();
        // Connexion compte : Appeler la fonction de connexion et vérifier le retour
        connexion(cy); 
    });
});