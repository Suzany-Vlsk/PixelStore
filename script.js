
// ==========================================
// PÁGINA INICIAL - SAUDAÇÃO
// ==========================================

function entrarNaLoja() {

    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem-boas-vindas");

    if (nome === "") {

        mensagem.textContent = "Digite seu nome antes de entrar na loja.";
        mensagem.style.color = "red";

    } else {

        mensagem.textContent = "Bem-vindo à Pixel Store, " + nome + "!";
        mensagem.style.color = "#7c3aed";

    }
}


// ==========================================
// PÁGINA INICIAL - MODO PROMOÇÃO
// ==========================================

function ativarPromocao() {

    let promocao = document.getElementById("promocao");
    let tituloPromocao = promocao.querySelector("h2");
    let cards = document.querySelectorAll(".card");

    // Alterando o fundo da seção
    promocao.style.backgroundColor = "#7c3aed";

    // Alterando a cor do título
    tituloPromocao.style.color = "#ffffff";

    // Alterando a borda dos cards
    for (let i = 0; i < cards.length; i++) {

        cards[i].style.border = "3px solid #facc15";
        cards[i].style.boxShadow = "0 0 15px #facc15";

    }

}


// ==========================================
// CATÁLOGO - CALCULAR COMPRA
// ==========================================

function calcularTotal() {

    let produto = document.getElementById("produto");
    let quantidadeCampo = document.getElementById("quantidade");

    let resultado = document.getElementById("resultado");
    let frete = document.getElementById("frete");

    // Lendo os valores
    let preco = Number(produto.value);
    let quantidade = Number(quantidadeCampo.value);

    // Calculando o valor inicial
    let total = preco * quantidade;

    // ======================================
    // DESCONTO
    // ======================================

    let desconto = 0;

    if (quantidade >= 3) {

        desconto = total * 0.10;
        total = total - desconto;

        resultado.textContent =
            "Total: R$ " + total.toFixed(2) +
            " - Desconto de 10% aplicado!";

    } else {

        resultado.textContent =
            "Total: R$ " + total.toFixed(2) +
            " - Nenhum desconto foi aplicado.";

    }


    // ======================================
    // FRETE
    // ======================================

    if (total >= 500) {

        frete.textContent = "Frete grátis disponível!";
        frete.style.color = "#16a34a";
        frete.style.fontWeight = "bold";

    } else {

        frete.textContent = "Frete calculado separadamente.";
        frete.style.color = "#dc2626";
        frete.style.fontWeight = "normal";

    }

}


// ==========================================
// ATENDIMENTO - ENVIAR MENSAGEM
// ==========================================

function enviarMensagem() {

    let nome = document.getElementById("nome-atendimento").value;
    let idade = Number(document.getElementById("idade").value);

    let resposta = document.getElementById("resposta-atendimento");
    let respostaIdade = document.getElementById("resposta-idade");


    // ======================================
    // VALIDAÇÃO DO NOME
    // ======================================

    if (nome === "") {

        resposta.textContent =
            "Digite seu nome antes de continuar.";

        resposta.style.color = "red";

    } else {

        resposta.textContent =
            "Obrigado, " + nome + "! Sua mensagem foi registrada.";

        resposta.style.color = "green";

    }


    // ======================================
    // RESPOSTA BASEADA NA IDADE
    // ======================================

    if (idade >= 18) {

        respostaIdade.textContent =
            "Você pode participar das promoções para maiores de 18 anos.";

        respostaIdade.style.color = "green";

    } else {

        respostaIdade.textContent =
            "As promoções gerais continuam disponíveis para você.";

        respostaIdade.style.color = "#7c3aed";

    }

}


// ==========================================
// ATENDIMENTO - DESTACAR FORMULÁRIO
// ==========================================

function destacarAtendimento() {

    let formulario = document.getElementById("formulario-atendimento");

    // Alterando pelo menos duas propriedades usando style
    formulario.style.backgroundColor = "#f3e8ff";
    formulario.style.borderColor = "#7c3aed";
    formulario.style.padding = "30px";

}