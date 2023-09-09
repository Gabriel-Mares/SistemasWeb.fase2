document.addEventListener("DOMContentLoaded", function () {
    const servicoInput = document.getElementById("servico");
    const dataInput = document.getElementById("data");
    const agendarButton = document.getElementById("agendar");
    const mensagemDiv = document.getElementById("mensagem");

    agendarButton.addEventListener("click", function () {
        const servico = servicoInput.value;
        const data = dataInput.value;

        if (servico && data) {
            mensagemDiv.innerHTML = `Agendamento concluído para ${servico} em ${data}`;
        } else {
            mensagemDiv.innerHTML = "Por favor, preencha todos os campos.";
        }
    });
});
