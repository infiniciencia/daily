document.addEventListener('DOMContentLoaded', function () {
    exibirMensagemDoDia();
});

function exibirMensagemDoDia() {
    const mensagensPorData = {
        "2024-01-01": ["Feliz Ano Novo!", "Você é o melhor presente que eu poderia ter!", "AMO VOCÊ!"],
        "2024-01-02": ["Cones de Amor", "~", "No véu do cosmos, onde a luz se desenha,", "Cones de amor, a se entrelaçar.", "Em curvas do espaço, o destino se enfeita,", "No baile cosmico, a dança a encantar.", "~", "No ano que desperta, como estrelas a brilhar,", "O futuro se estende, vasto e a pulsar.", "Cones de esperança, no tecido do tempo,", "No compasso do universo, como o instrumento.", "~", "Entre singularidades, o coração a pulsar,", "Gravitamos sonhos, a nos entrelaçar.", "Em meio a paixão, como de um Quasar,", "No abraço do agora, o amor a prosperar.", "~", "Que o ano que se inicia seja como a luz estelar,", "Em cones de promessas, no espaço a conduzir.", "Que juntos, em sintonia, possamos traçar,", "O amor em constante evolução, a nos unir."],
        "2024-01-03": ["Em teu olhar, encontro o universo inteiro", "e nele descubro que o amor é a linguagem divina", "que traduz a beleza da nossa existência!"],
	"2024-01-04": ["Pensando em você"],
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
