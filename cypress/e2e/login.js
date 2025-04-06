describe("Tela de Login", () => {
    beforeEach(() => {
        cy.visit("/entrar");
    });

    it("deve carregar a página de login", () => {
        cy.url().should("include", "/entrar");
    });

    it("deve permitir digitar o email e a senha", () => {
        const email = "11122233345";
        const senha = "senhaSegura123";

        cy.get('#cpf_usuario_input').type(email);
        cy.get('#cpf_usuario_input').should('have.value', email);

        cy.get('#senha_usuario_input').type(senha);
        cy.get('#senha_usuario_input').should('have.value', senha);
    });

    it("deve exibir mensagem de erro se os campos estiverem vazios e o botão for clicado", () => {
        cy.get('button').contains('Entrar').click();

        // Mensagens de erro
        cy.get('.text-red-500').should('exist');
    });

    it("deve permitir o clique no botão de login e deve redirecionar para /login se bem-sucedido", () => {
        const email = "11122233345";
        const senha = "senha123";

        cy.get('#cpf_usuario_input').type(email);
        cy.get('#senha_usuario_input').type(senha);

        cy.get('button').contains('Entrar').click();

        cy.contains("Logado com sucesso!").should("be.visible");
        cy.url({ timeout: 4000 }).should("include", "/loja");
        // Verifica se a mensagem de sucesso aparece na tela
        // cy.contains(`Estamos processando para validar seu acesso`).should('be.visible');
    });

    it("deve navegar para a página de cadastro ao clicar em 'Inscreva-se'", () => {
        cy.contains('Inscreva-se').click();
        cy.url().should('include', '/cadastrar');
    });
})