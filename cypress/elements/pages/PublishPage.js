export default class PublishPage {
    getPublishTitle() {
        return cy.get('.Publish--input-title').clear();
    }
    getPublishDescription() {
        return cy.get('.Publish--input-description').clear();
    }
    getPublishPrice() {
        return cy.get('.Publish--input-price').clear();
    }
    getPublishFile() {
        return cy.get('.Publish--input-picture');
    }
    getPublishSubmit() {
        return cy.get('.Publish--input-submit');
    }

}