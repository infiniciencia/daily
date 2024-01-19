document.addEventListener('DOMContentLoaded', function () {
    exibirMensagemDoDia();
});

function exibirMensagemDoDia() {
    const mensagensPorData = {
        "2024-01-01": ["Feliz Ano Novo!", "Você é o melhor presente que eu poderia ter!", "AMO VOCÊ!"],
        "2024-01-02": ["Cones de Amor", "~", "No véu do cosmos, onde a luz se desenha,", "Cones de amor, a se entrelaçar.", "Em curvas do espaço, o destino se enfeita,", "No baile cosmico, a dança a encantar.", "~", "No ano que desperta, como estrelas a brilhar,", "O futuro se estende, vasto e a pulsar.", "Cones de esperança, no tecido do tempo,", "No compasso do universo, como o instrumento.", "~", "Entre singularidades, o coração a pulsar,", "Gravitamos sonhos, a nos entrelaçar.", "Em meio a paixão, como de um Quasar,", "No abraço do agora, o amor a prosperar.", "~", "Que o ano que se inicia seja como a luz estelar,", "Em cones de promessas, no espaço a conduzir.", "Que juntos, em sintonia, possamos traçar,", "O amor em constante evolução, a nos unir."],
        "2024-01-03": ["Em teu olhar, encontro o universo inteiro", "e nele descubro que o amor é a linguagem divina", "que traduz a beleza da nossa existência!"],
	"2024-01-04": ["Pensando em você..."],
	"2024-01-05": ["Em um emaranhamento de destinos,", "nossos corações dançam como partículas entrelaçadas.", "Na mecânica quântica do amor,", "somos como átomos conectados por forças invisíveis.", "Nossos momentos juntos são como superposição de estados,", "onde a incerteza se dissolve na certeza de que,", "mesmo em diferentes espaços, nossas ondas se encontram.", "~", "Em que nível subatômico nossos corações dançam", "em um entrelaçamento de amor?"],
	"2024-01-06": ["Eu posso não ter ido para onde eu pretendia ir,", "mas eu acho que acabei terminando onde eu pretendia estar.", "~", "- Douglas Adams"],
	"2024-01-07": ["Você é a constante do meu coração,", "a variável que completa a equação do meu amor."],
	"2024-01-08": ["Scientific progress is measured in units of courage, not intelligence.", "~", "- Paul Dirac"],
	"2024-01-09": ["Eu realmente quero dançar com você!"],
	"2024-01-10": ["Pergunta:", "~", "O que a maçã disse para Isaac Newton?"],
	"2024-01-11": ["Para olhar um arco-íris", "é necessário primeiro suportar a chuva.", "~", "- Richard Feynman"],
	"2024-01-12": ["Se consegui enxergar mais longe,", "foi porque me apoiei nos ombros de gigantes.", "~", "- Isaac Newton"]
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
