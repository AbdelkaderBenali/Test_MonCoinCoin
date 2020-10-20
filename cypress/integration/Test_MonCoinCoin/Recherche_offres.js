import HomePage from '../../elements/pages/HomePage';
import SearchPage from '../../elements/pages/SearchPage';
//import OffreDetailPage from '../../elements/pages/OffreDetailPage';

describe("4- Rechercher des offres", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let user = "auto1";

    let homePage = new HomePage();
    let searchPage = new SearchPage();
    //let offreDetailPage = new OffreDetailPage();

    const recherche = () => {
        // Vérifier l'ouverture de la page de recherche
        searchPage.expectDetailOffertPage();
        // Effacer le contenu des champs avant de faire des saisies
        searchPage.getKeyword().clear().type('voiture');
        searchPage.butonSubmitRechercher().click()
        //cy.get('.Search--button').click();
        // Localiser le premier résultat affiché puis cliquer
        searchPage.getFirstResult().click();
        // Verifier le résultat de la première annonce
        cy.get('.Offer--addCart').contains(' Ajouter au panier ');
        // Question : la ligne suivante génère erreur ? le titre n'est pas visible 
        //cy.get('.Offer--titleAndPrice-title').contains('voiture');
        
        
        
        // Borner sur le prix min et max
        //searchPage.getPriceMin().clear().type('1000');
        //searchPage.getPriceMax().clear().type('6000');
        // Trier sur les plus chères avec le menu déroulant
        //searchPage.getSort().select('Plus chères');
        // Cliquer sur le bouton "rechercher"
        //searchPage.butonSubmitRechercher().click();
    }

    it("4.1- Rechercher des offres depuis le bouton 'Rechercher' du 'Header'", ()=>{
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton Rechercher
        homePage.butonRechercher().click();
        // Vérifier l'ouverture de la page de recherche
        searchPage.expectDetailOffertPage();
        // Appeler la fonction recherche
        recherche();   
        // Comment vérifier les résultats du tri : Test à finalser /!\   
    });

   
});