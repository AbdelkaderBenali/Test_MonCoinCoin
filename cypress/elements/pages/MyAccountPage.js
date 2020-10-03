export default class MyAccountPage {
    getButonCart() {
        return cy.get('.Cart--box');
    }
    getMenuMesInfos() {
        return cy.get(':nth-child(1) > a > span');
    }

    getMenuMesAnnonces() {
        return cy.get(':nth-child(2) > a > span');
    }

}