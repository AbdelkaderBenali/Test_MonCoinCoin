import HomePage from '../../elements/pages/HomePage';
import ExpectPage from '../../elements/pages/ExpectPage';
import SearchPage from '../../elements/pages/SearchPage';

describe("4- Rechercher des offres", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";

    let homePage = new HomePage();
    let expectPage = new ExpectPage();
    let searchPage = new SearchPage();

    const recherche = (p) => {
        // Vérifier l'ouverture de la page de recherche
        expectPage.getExpectSearchPage();
        // Effacer le contenu des champs avant de faire des saisies
        searchPage.getKeyword().type('voiture');
        cy.get('.Search--button').click();
        // Verifier le résultat de la première annonce
        cy.get('.Offers--offer-title').contains('voiture');
        // Borner sur le prix min et max
        searchPage.getPriceMin().type('1000');
        searchPage.getPriceMax().clear().type('6000');
        // Trié sur les plus chères avec le menu déroulant
        searchPage.getSort().select('Plus chères');
        // Cliquer sur le bouton "rechercher"
        searchPage.getButonSubmitRechercher().click();
    }

    it("4.1- Rechercher des offres depuis le bouton 'Rechercher' du 'Header'", ()=>{
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton Rechercher
        homePage.getButonRechercher().click();
        // Appeler la fonction recherche
        recherche(cy);   
        // Comment vérifier les résultats du tri : Test à finalser /!\   
    });

    it("4.2- Rechercher des offres avec le bouton 'Consulter les offres' depuis le 'Home'", ()=>{
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton "Consulter des offres"
        homePage.getButonSearchOffers().click();
        // Vérifier l'ouverture de la page de recherche
        expectPage.getExpectSearchPage();
        // Appeler la fonction recherche
        recherche(cy); 
        
        // Consulter le premier résultat de recherche
        cy.get('.Offers--offer').eq(0).click();
        expectPage.getExpectDisplayOffer();
        
        // Comment vérifier les résultats du tri : Test à finalser /!\        
    });
});