export default class PublishPage {

    // Verifier page déposer annonce
     expectPublishPage() {
        return cy.get('.Publish--title').should('have.text', "Déposer une annonce");
    } 

    // Vérifier le champ : Titre de l'annonce
    getPublishTitle() {
        return cy.get('.Publish--input-title').clear();
    }

    // Vérifier le champ description : Texte de l'annonce:
    getPublishDescription() {
        return cy.get('.Publish--input-description').clear();
    }

    // Vérifier le champ : Prix
    getPublishPrice() {
        return cy.get('.Publish--input-price').clear();
    }

    // Vérifier le bouton : Choisir un fichier
    getPublishFile() {
        return cy.get('.Publish--input-picture');
    }

     // Vérifier le bouton : Valider
    getPublishSubmit() {
        return cy.get('.Publish--input-submit');
    }

}