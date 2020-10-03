describe("Création compte", () => {
    const url = "https://affectionate-knuth-1ccbc3.netlify.app/";
    let userTmp = new Date();   
    let user = `${userTmp.getMonth()}${userTmp.getDay()}${userTmp.getHours()}${userTmp.getMinutes()}${userTmp.getSeconds()}${userTmp.getMilliseconds()}`;

    const signUp = (p) => {
        // Verifier la page
        p.get('.SignIn--title').should('have.text', "Connexion");
        // Cliquer sur le bouton "Créer un compte"
        p.get('.SignIn--signUp-submit').click()
        p.get('.SignIn--title').should('have.text', "Inscription");
        // Effacer le contenu des champs avant de faire une saisie
        p.get('[name="email"]').clear().type(`${user}@test.fr`);
        p.get('.SignIn--email').eq(1).clear().type(`${user}`);
        p.get('.SignIn--password').clear().type("123456");
        p.get('.SignIn--submit').click();
    }

    it("Créer un compte depuis le 'Header'", () => {
        // Visiter le site
        cy.visit(url);
        // Cliquer sur le bouton connexion du "Header"
        cy.get('.Header--signIn-button').click();
        // Connexion : Appeler la fonction de connexion
        signUp(cy);
        //Verifier la page
         cy.get('.Home--slogan').should('have.text', "<< Le coin des bonnes affaires ! >>")
    });

   it("Créer un compte existant depuis le 'Home", () => {
        // Visiter le site
        cy.visit(url);
        cy.get('.Home--signIn').click();
        signUp(cy);
       //Verifier la page
       cy.get('.NotConnected--body').should('have.text', "Informations manquantes ou Utilisateur déjà existant");     
   });
});