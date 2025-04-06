describe("Tela de Cadastro", () => {
    beforeEach(() => {
        cy.visit("/cadastrar");
    });
  
    it("deve carregar a página de cadastro", () => {
        cy.url().should("include", "/cadastrar");
    });
  
    it("deve permitir digitar o nome completo", () => {
        let nome = "Levi de Lima Pereira Junior"
        cy.get('#nome_completo_input').type(nome);
        cy.get('#nome_completo_input').should('have.value', nome);

        let username = "levipereira"
        cy.get('#nome_usuario_input').type(username);
        cy.get('#nome_usuario_input').should('have.value', username);

        let email = "levi@gmail.com"
        cy.get('#email_usuario_input').type(email);
        cy.get('#email_usuario_input').should('have.value', email);

        let numero = "83999999999"
        cy.get('#numero_telefone_usuario_input').type(numero);
        cy.get('#numero_telefone_usuario_input').should('have.value', numero);

        let cpf = "11122233345"
        cy.get('#cpf_usuario_input').type(cpf);
        cy.get('#cpf_usuario_input').should('have.value', cpf);

        let senha = "minhasenha123"
        cy.get('#senha_usuario_input').type(senha);
        cy.get('#senha_usuario_input').should('have.value', senha);

        let endereco = "rua tal"
        cy.get('#endereco_usuario_input').type(endereco);
        cy.get('#endereco_usuario_input').should('have.value', endereco);

        let cidade = "Campina Grande"
        cy.get('#cidade_usuario_input').type(cidade);
        cy.get('#cidade_usuario_input').should('have.value', cidade);

        let uf = "PB"
        cy.get('#estado_usuario_input').type(uf);
        cy.get('#estado_usuario_input').should('have.value', uf);

        let cep = "58475000"
        cy.get('#cep_usuario_input').type(cep);
        cy.get('#cep_usuario_input').should('have.value', cep);
        
        cy.get("#termos_servico_input").check({ force: true });
        cy.get("#termos_servico_input").should("be.checked");

        cy.get("#criar_conta").click({ force: true });
    });
  });
  