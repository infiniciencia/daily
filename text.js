document.addEventListener('DOMContentLoaded', function () {
    exibirMensagemDoDia();
});

function exibirMensagemDoDia() {
    const mensagensPorData = {
	"2024-01-19": ["Cause I Need your love, I need your heart", "Cmon baby girl, Ima give you a part of me"],
	"2024-01-20": ["Entre tragédias e comédias,", "a gente briga mas se entende..."],
	"2024-01-22": ["Quando tem você tá tudo feito,", "perfeito !"],
	"2024-01-23": ["Tá aí esse é o meu celular,", "liga só pra eu te escutar (Amo sua voz)"],
	"2024-01-24": ["Mil e uma noites com você !"],
	"2024-01-25": ["Ainda bem que eu te encontrei pra corrigir o passado"],
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
