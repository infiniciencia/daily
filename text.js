document.addEventListener('DOMContentLoaded', function () {
    exibirMensagemDoDia();
});

function exibirMensagemDoDia() {
    const mensagensPorData = {
        "2023-12-29": ["Teste Teste Teste Teste Teste"],
        "2023-01-01": ["Mensagem 1", "<br>"],
        "2023-01-02": ["Mensagem 2", "<br>"],
        "2023-12-31": ["Mensagem 365", "<br>"]
    };

    const dataAtual = new Date();
    const dataAtualFormatada = obterDataFormatada(dataAtual);

    const mensagensAtuais = mensagensPorData[dataAtualFormatada] || ["Mensagem padrão para o dia atual"];

    const mensagemDoDiaElement = document.getElementById('mensagemDoDia');
    mensagemDoDiaElement.innerHTML = "";

    mensagensAtuais.forEach((mensagemParte, index) => {
        const paragrafo = document.createElement('p');
		paragrafo.classList.add('new');
        paragrafo.textContent = mensagemParte;
        mensagemDoDiaElement.appendChild(paragrafo);
    });
}

function obterDataFormatada(data) {
    const ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    mes = mes < 10 ? `0${mes}` : mes;
    dia = dia < 10 ? `0${dia}` : dia;

    return `${ano}-${mes}-${dia}`;
}
