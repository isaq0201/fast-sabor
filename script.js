// ======================================
// MODO ESCURO
// ======================================

const tema = document.getElementById("tema");

if (tema) {

    tema.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("tema", "dark");

        } else {

            localStorage.setItem("tema", "light");

        }

    });

}

if (localStorage.getItem("tema") === "dark") {

    document.body.classList.add("dark");

}

// ======================================
// BANNER ROTATIVO
// ======================================

const frases = [

    "🍔 O Melhor Hambúrguer da Cidade",
    "🔥 Promoções Imperdíveis",
    "🚚 Entrega Super Rápida",
    "⭐ Sabor que Conquista"

];

let indiceBanner = 0;

const tituloBanner =
document.getElementById("titulo-banner");

if (tituloBanner) {

    setInterval(() => {

        indiceBanner++;

        if (indiceBanner >= frases.length) {

            indiceBanner = 0;

        }

        tituloBanner.innerText =
        frases[indiceBanner];

    }, 3000);

}

// ======================================
// PESQUISA CARDÁPIO
// ======================================

function pesquisarLanche() {

    const pesquisa =
    document.getElementById("pesquisa")
    .value
    .toLowerCase();

    const produtos =
    document.querySelectorAll(".produto");

    produtos.forEach(produto => {

        const texto =
        produto.innerText.toLowerCase();

        produto.style.display =
        texto.includes(pesquisa)
        ? "block"
        : "none";

    });

}

// ======================================
// RECLAMAÇÕES
// ======================================

const abrirFormulario =
document.getElementById("abrirFormulario");

const formulario =
document.getElementById("formulario");

const cards =
document.getElementById("cards");

const total =
document.getElementById("total");

let reclamacoes =
JSON.parse(
localStorage.getItem("reclamacoes")
) || [];

if (abrirFormulario) {

    abrirFormulario.addEventListener("click", () => {

        formulario.classList.toggle("escondido");

    });

}

function salvarReclamacoes() {

    localStorage.setItem(
        "reclamacoes",
        JSON.stringify(reclamacoes)
    );

}

function atualizarContador() {

    if (total) {

        total.innerText =
        reclamacoes.length;

    }

}

function renderizar() {

    if (!cards) return;

    cards.innerHTML = "";

    reclamacoes.forEach((item, index) => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <h3>${item.nome}</h3>

            <div class="estrelas">
                ${item.nota}
            </div>

            <p>${item.texto}</p>

            <div class="data">
                ${item.data}
            </div>

            <button
                class="excluir"
                onclick="excluirReclamacao(${index})">
                Excluir
            </button>

        `;

        cards.appendChild(card);

    });

    atualizarContador();

}

function criarReclamacao() {

    const nome =
    document.getElementById("nome").value;

    const texto =
    document.getElementById("texto").value;

    const nota =
    document.getElementById("nota").value;

    if (nome === "" || texto === "") {

        alert("Preencha todos os campos!");

        return;

    }

    reclamacoes.push({

        nome,
        texto,
        nota,

        data:
        new Date()
        .toLocaleDateString("pt-BR")

    });

    salvarReclamacoes();

    renderizar();

    document.getElementById("nome").value = "";
    document.getElementById("texto").value = "";

    formulario.classList.add("escondido");

}

function excluirReclamacao(index) {

    reclamacoes.splice(index, 1);

    salvarReclamacoes();

    renderizar();

}

renderizar();

// ======================================
// AVALIAÇÕES
// ======================================

const abrirAvaliacao =
document.getElementById("abrirAvaliacao");

const formularioAvaliacao =
document.getElementById("formularioAvaliacao");

const cardsAvaliacoes =
document.getElementById("cardsAvaliacoes");

const totalAvaliacoes =
document.getElementById("totalAvaliacoes");

let avaliacoes =
JSON.parse(
localStorage.getItem("avaliacoes")
) || [];

if (abrirAvaliacao) {

    abrirAvaliacao.addEventListener("click", () => {

        formularioAvaliacao
        .classList
        .toggle("escondido");

    });

}

function salvarAvaliacoes() {

    localStorage.setItem(
        "avaliacoes",
        JSON.stringify(avaliacoes)
    );

}

function atualizarTotalAvaliacoes() {

    if (totalAvaliacoes) {

        totalAvaliacoes.innerText =
        avaliacoes.length;

    }

}

function renderizarAvaliacoes() {

    if (!cardsAvaliacoes) return;

    cardsAvaliacoes.innerHTML = "";

    avaliacoes.forEach((item, index) => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <h3>${item.nome}</h3>

            <div class="estrelas">
                ${item.estrelas}
            </div>

            <p>${item.comentario}</p>

            <button
                class="excluir"
                onclick="excluirAvaliacao(${index})">
                Excluir
            </button>

        `;

        cardsAvaliacoes.appendChild(card);

    });

    atualizarTotalAvaliacoes();

}

function criarAvaliacao() {

    const nome =
    document.getElementById("nomeAvaliacao").value;

    const estrelas =
    document.getElementById("estrelasAvaliacao").value;

    const comentario =
    document.getElementById("comentarioAvaliacao").value;

    if (nome === "" || comentario === "") {

        alert("Preencha todos os campos!");

        return;

    }

    avaliacoes.push({

        nome,
        estrelas,
        comentario

    });

    salvarAvaliacoes();

    renderizarAvaliacoes();

    document.getElementById(
        "nomeAvaliacao"
    ).value = "";

    document.getElementById(
        "comentarioAvaliacao"
    ).value = "";

    formularioAvaliacao
    .classList
    .add("escondido");

}

function excluirAvaliacao(index) {

    avaliacoes.splice(index, 1);

    salvarAvaliacoes();

    renderizarAvaliacoes();

}

renderizarAvaliacoes();

// ======================================
// CONTADORES ANIMADOS
// ======================================

function animarNumero(id, valor) {

    const elemento =
    document.getElementById(id);

    if (!elemento) return;

    let numero = 0;

    const intervalo =
    setInterval(() => {

        numero++;

        elemento.innerText = numero;

        if (numero >= valor) {

            clearInterval(intervalo);

        }

    }, 10);

}

animarNumero("clientes", 500);
animarNumero("pedidos", 1200);
animarNumero("avaliacoes", 850);