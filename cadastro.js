document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");
    const esqueciSenhaLink = document.getElementById("esqueci-senha");
    const mensagemRecuperacao = document.getElementById("mensagem-recuperacao");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do envio do formulário.

        // Obtém o valor do email e senha do formulário.
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Simulação de envio de dados para o servidor.
            alert("Cadastro realizado com sucesso!");

            // Redirecionar para a página de destino após um pequeno atraso (opcional).
            setTimeout(function () {
                window.location.href = "/busca.html";
            }, 1000); // Redirecionar após 1 segundo (1000 milissegundos).

            // Limpa os campos do formulário.
            form.reset();
        }
    });

    esqueciSenhaLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link.

        // Simulação de envio de email de recuperação.
        mensagemRecuperacao.style.display = "block";
    });
});
