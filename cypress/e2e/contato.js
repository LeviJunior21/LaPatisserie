describe("Tela de Contato", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#Contato").click({ force: true });
    });
  
    it("deve carregar a página de cadastro", () => {
        cy.url().should("include", "/contato");
    });
  
    it("deve permitir digitar o nome completo", () => {
        let nome = "Levi de Lima Pereira Junior"
        cy.get('#nome_completo_input').type(nome);
        cy.get('#nome_completo_input').should('have.value', nome);

        let email = "levi@gmail.com"
        cy.get('#email_usuario_input').type(email);
        cy.get('#email_usuario_input').should('have.value', email);

        let mensagem = "Oi"
        cy.get('#mensagem_usuario_input').type(mensagem);
        cy.get('#mensagem_usuario_input').should('have.value', mensagem);

        cy.get("#enviar").click({ force: true });
        cy.get("#mensagem_cadastro").should("have.text", `Thank you dear ${nome}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`);
    });
});
