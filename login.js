document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");
    const esqueciSenhaLink = document.getElementById("esqueci-senha");
    const mensagemRecuperacao = document.getElementById("mensagem-recuperacao");

    form.addEventListener("submit", function (event) {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Simulação de envio de dados para o servidor.
            alert("Cadastro realizado com sucesso!");
            window.location.href = "/busca.html";
        }
    });

    esqueciSenhaLink.addEventListener("click", function (event) {
        event.preventDefault();
        // Simulação de envio de email de recuperação.
        mensagemRecuperacao.style.display = "block";
    });
});
