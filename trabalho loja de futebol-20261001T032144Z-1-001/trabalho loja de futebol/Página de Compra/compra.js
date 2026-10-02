
// ========================================
// PRODUTOS
// ========================================

const produtos = {

    1: {
        categoria: "INVERNO",
        nome: "JaquetaDo Sao Paulo",
        preco: "R$499.99",
        descricao: "Jaqueta Corta-Vento São Paulo Orgulho Tricolor - Preto+Vermelho.",
        temTamanho: true,
        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [
            {
                nome: "Modelo branco e vermelho",
                especificacao: "cor preta e vermelha • 100% algodão",
                imagem: "../Imagens/camisa f sp.jpeg"
            },
            {
                nome: "Modelo Branco e vermelho",
                especificacao: "cor branca e vermelha • 100% algodão",
                imagem: "../Imagens/camisa c sp.jpeg"
            }
        ]
    },

    2: {
        categoria: "CAMISAS",
        nome: "camisa do botafogo",
        preco: "R$ 350,00",
        descricao: "camisa do botafogo",
        temTamanho: true,
        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [
            {
                nome: "camisa do botafogo",
                especificacao: "cor preta e branca 100% de algodao",
                imagem: "../imagens/camisa frente botafogoa.jpeg"
            },
            {
                nome: "camisa do botafogo",
                especificacao: "cor preta e branca 100% de algodao",
                imagem: "../Imagens/camisa frente botafogo.jpeg"
            },
            {
                nome: "camisa do botafogo",
                especificacao: "cor preta e branca 100% de algodao",
                imagem: "../Imagens/camisa frente e costa botafogo.jpeg"
            }
        ]
    },

    3: {
        categoria: "CAMISAS",
        nome: "camisa do sao paulo",
        preco: "R$ 359,99",
        descricao: "camisa do sao paulo.",
        temTamanho: true,
        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [
            {
                nome: "camisa do sao paulo",
                especificacao: "cor preta 100% de algodao",
                imagem: "../Imagens/camiseta do sao paulo.jpeg"
            },
            {
                nome: "camisa do sao paulo",
                especificacao: "cor preta 100% de algodao",
                imagem: "../Imagens/camisa frente e costa sao paulo.jpeg"
            }
        ]
    },

    4: {
        categoria: "CAMISAS",
        nome: "Camisa Do Corinthias",
        preco: "R$ 399.99",
        descricao: "Camisa Do Corinthias.",
        temTamanho: true,
        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [
            {
                nome: "camisa do corinthias",
                especificacao: "cor preta e laranja 100% de algodao",
                imagem: "../Imagens/camisa da frente do corinthias.jpeg"
            },
            {
                nome: "Camisa Do Corinthias",
                especificacao: "cor preta e laranja 100% de algodao",
                imagem: "../Imagens/camisa de tras do corinthias.jpeg"
            }
        ]
    },

    5: {
        categoria: "CHUTEIRAS",
        nome: "Chuteira Da umbro",
        preco: "R$ 1.199,99",
        descricao: "A chuteira da Umbro Adamant Top Speed Pro Kintsugi e uma super chuteira de alto desempenho desenvolvida para atletas.",
        temTamanho: true,
        tamanhos: ["39", "41", "42", "43"],

        variacoes: [
            {
                nome: "super chuteira da Umbro",
                especificacao: "cor Branco-Azul com dourado",
                imagem: "../Imagens/chuteira da umbra.jpeg"
            },
            {
                nome: "chuteira para atletas",
                especificacao: "cor Branco-Azul com dourado",
                imagem: "../Imagens/chuteira umbro com 2 chuteiras.jpeg"
            }
        ]
    },

    6: {
        categoria: "OUTROS",
        nome: "Meioes da Umbro",
        preco: "R$ 59,99",
        descricao: "Meião Umbro Cano Longo: conforto, ajuste firme, respirabilidade e resistência para treinos e partidas.",
        temTamanho: true,
        tamanhos: ["39", "40", "41"],

        variacoes: [
            {
                nome: "Meiao da Umbro",
                especificacao: "Cor Branca",
                imagem: "../Imagens/quatro meioes da umbro.jpeg"
            },
            {
                nome: "Meiao da Umbro",
                especificacao: "Cor Branca",
                imagem: "../Imagens/meiao da umbro.jpeg"
            }
        ]
    },

    7: {
        categoria: "INVERNO",
        nome: "Blusa De Frio Do BotaFogo",
        preco: "R$ 190,00",
        descricao: "blusa de Frio Botafogo Branca 2023/24 Masculina.",
        temTamanho: true,
        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [
            {
                nome: "Modelo Preto",
                especificacao: "Cor Preta e branco 100% de algodao",
                imagem: "../Imagens/blusa botafogo.jpeg"
            },
            {
                nome: "Modelo Preto",
                especificacao: "Cor Preta e branco 100% de algodao",
                imagem: "../Imagens/c botafogo.jpeg"
            }
        ]
    },

    8: {
        categoria: "CHUTEIRA",
        nome: "Chuteira Puma",
        preco: "R$ 481,55",
        descricao: "puma Mercurial Superfly 10 Elite FG: velocidade, controle e precisão.",
        temTamanho: true,
        tamanhos: ["39", "40", "41"],

        variacoes: [
            {
                nome: "Chuteira Da Puma",
                especificacao: "Cor bege-vermelho",
                imagem: "../Imagens/chuteira puma.jpeg"
            },
            {
                nome: "Chuteira Da Puma",
                especificacao: "Cor bege-vermelho",
                imagem: "../Imagens/chuteira puma 2.jpeg"
            }
        ]
    },

    9: {
        categoria: "OUTROS",
        nome: "Perfume do Corinhias",
        preco: "R$ 99,99",
        descricao: "Perfume Masculino Corinthians Invasão 2000 - Oficial.",
        temTamanho: false,

        variacoes: [
            {
                nome: "perfume do Corinthias",
                especificacao: "100ml",
                imagem: "../Imagens/perfume corinthias f.jpeg"
            },
            {
                nome: "perfume do Corinthias",
                especificacao: "100ml",
                imagem: "../Imagens/caixa corinthias.jpeg"
            }
        ]
    },

    10: {
        categoria: "OUTROS",
        nome: "Caneleira Futebol umbro",
        preco: "R$ 59,99",
        descricao: "Caneleira Umbro Team St.",
        temTamanho: true,
        tamanhos: ["U"],

        variacoes: [
            {
                nome: "caneleira Umbro",
                especificacao: "Cor Juvenil-umbro-preto e laranja",
                imagem: "../Imagens/f umbro.jpeg"
            },
            {
                nome: "caneleira umbro",
                especificacao: "cor Juvenil-umbro-Preto e laranja",
                imagem: "../Imagens/c umbro.jpeg"
            }
        ]
    }
};


// ========================================
// PEGAR ID DO PRODUTO
// ========================================

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id") || "1";

const produto = produtos[id] || produtos[1];


// ========================================
// CARREGAR PRODUTO
// ========================================

function carregarProduto() {

    document.getElementById("categoriaProduto").textContent =
        produto.categoria;

    document.getElementById("nomeProduto").textContent =
        produto.nome;

    document.getElementById("precoProduto").textContent =
        produto.preco;

    document.getElementById("descricaoProduto").textContent =
        produto.descricao;

    criarMiniaturas();

    configurarTamanhos();
}


// ========================================
// CRIAR MINIATURAS
// ========================================

function criarMiniaturas() {

    const area = document.getElementById("miniaturas");

    area.innerHTML = "";

    produto.variacoes.forEach(function(variacao) {

        const imagem = document.createElement("img");

        imagem.src = variacao.imagem;

        imagem.alt = variacao.nome;

        imagem.dataset.nome = variacao.nome;

        imagem.dataset.especificacao =
            variacao.especificacao;

        imagem.onclick = function() {

            trocarModelo(imagem);

        };

        area.appendChild(imagem);

    });


    const primeiraImagem =
        area.querySelector("img");

    if (primeiraImagem) {

        trocarModelo(primeiraImagem);

    }
}


// ========================================
// TROCAR MODELO
// ========================================

function trocarModelo(imagem) {

    document.getElementById("imagemPrincipal").src =
        imagem.src;

    document.getElementById("nomeModelo").textContent =
        imagem.dataset.nome;

    document.getElementById("especificacaoModelo").textContent =
        imagem.dataset.especificacao;


    const miniaturas =
        document.querySelectorAll(".miniaturas img");


    miniaturas.forEach(function(item) {

        item.classList.remove("selecionada");

    });


    imagem.classList.add("selecionada");
}


// ========================================
// TAMANHOS
// ========================================

function configurarTamanhos() {

    const area =
        document.getElementById("areaTamanhos");

    const tamanhos =
        document.getElementById("tamanhos");

    tamanhos.innerHTML = "";


    if (produto.temTamanho === true) {

        area.style.display = "block";


        produto.tamanhos.forEach(function(tamanho) {

            const botao =
                document.createElement("button");

            botao.type = "button";

            botao.textContent = tamanho;


            botao.onclick = function() {

                selecionarTamanho(botao);

            };


            tamanhos.appendChild(botao);

        });

    } else {

        area.style.display = "none";

    }
}


// ========================================
// SELECIONAR TAMANHO
// ========================================

function selecionarTamanho(botao) {

    const botoes =
        document.querySelectorAll(".tamanhos button");


    botoes.forEach(function(item) {

        item.classList.remove("selecionado");

    });


    botao.classList.add("selecionado");
}


// ========================================
// PEGAR PRODUTO SELECIONADO
// ========================================

function pegarProdutoSelecionado() {

    return {

        id: id,

        nome: produto.nome,

        preco: produto.preco,

        imagem:
            document.getElementById("imagemPrincipal").src,

        categoria: produto.categoria,

        tamanho:
            document.querySelector(
                ".tamanhos button.selecionado"
            )?.textContent || "Não selecionado",

        modelo:
            document.getElementById("nomeModelo").textContent,

        especificacao:
            document.getElementById(
                "especificacaoModelo"
            ).textContent,

        quantidade: 1
    };
}


// ========================================
// COMPRAR PRODUTO
// ========================================

function comprarProduto() {

    const produtoSelecionado =
        pegarProdutoSelecionado();


    localStorage.setItem(
        "produtoCompra",
        JSON.stringify(produtoSelecionado)
    );


    adicionarProdutoNoCarrinho();

    abrirCarrinho();
}


// ========================================
// ADICIONAR AO CARRINHO
// ========================================

function adicionarAoCarrinho() {

    adicionarProdutoNoCarrinho();

    abrirCarrinho();
}


function adicionarProdutoNoCarrinho() {

    const produtoSelecionado =
        pegarProdutoSelecionado();


    let carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    /*
       Verifica se já existe exatamente
       o mesmo produto, tamanho e modelo.
    */

    const existente = carrinho.find(function(item) {

        return (
            item.id === produtoSelecionado.id &&
            item.tamanho === produtoSelecionado.tamanho &&
            item.modelo === produtoSelecionado.modelo
        );

    });


    if (existente) {

        existente.quantidade += 1;

    } else {

        carrinho.push(produtoSelecionado);

    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}


// ========================================
// ABRIR CARRINHO
// ========================================

function abrirCarrinho() {

    atualizarCarrinho();


    document
        .getElementById("carrinhoLateral")
        .classList.add("aberto");


    document
        .getElementById("fundoCarrinho")
        .classList.add("aberto");
}


// ========================================
// FECHAR CARRINHO
// ========================================

function fecharCarrinho() {

    document
        .getElementById("carrinhoLateral")
        .classList.remove("aberto");


    document
        .getElementById("fundoCarrinho")
        .classList.remove("aberto");
}


// ========================================
// ATUALIZAR CARRINHO
// ========================================

function atualizarCarrinho() {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    const lista =
        document.getElementById("listaCarrinho");


    lista.innerHTML = "";


    let total = 0;


    if (carrinho.length === 0) {

        lista.innerHTML = `
            <div class="carrinho-vazio">
                🛒<br><br>
                Seu carrinho está vazio.
            </div>
        `;

    }


    carrinho.forEach(function(produto, indice) {

        const preco =
            converterPreco(produto.preco);


        const quantidade =
            produto.quantidade || 1;


        total += preco * quantidade;


        const item =
            document.createElement("div");


        item.className =
            "item-carrinho";


        item.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="info-carrinho">

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    ${produto.tamanho}
                </p>

                <p>
                    ${produto.modelo}
                </p>

                <p class="preco-carrinho">
                    ${formatarPreco(preco)}
                </p>


                <div class="controle-quantidade">

                    <button
                        type="button"
                        onclick="alterarQuantidade(${indice}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${quantidade}
                    </span>

                    <button
                        type="button"
                        onclick="alterarQuantidade(${indice}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                type="button"
                class="remover-item"
                onclick="removerDoCarrinho(${indice})"
            >
                ×
            </button>

        `;


        lista.appendChild(item);

    });


    document.getElementById("totalCarrinho").textContent =
        formatarPreco(total);
}


// ========================================
// CONVERTER PREÇO
// ========================================

function converterPreco(preco) {

    return Number(
        String(preco)
            .replace("R$", "")
            .replace(/\s/g, "")
            .replace(/\./g, "")
            .replace(",", ".")
    ) || 0;
}


// ========================================
// FORMATAR PREÇO
// ========================================

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


// ========================================
// ALTERAR QUANTIDADE
// ========================================

function alterarQuantidade(indice, valor) {

    let carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    if (!carrinho[indice]) {
        return;
    }


    carrinho[indice].quantidade =
        (carrinho[indice].quantidade || 1) + valor;


    if (carrinho[indice].quantidade <= 0) {

        carrinho.splice(indice, 1);

    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    atualizarCarrinho();
}


// ========================================
// REMOVER PRODUTO
// ========================================

function removerDoCarrinho(indice) {

    let carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    carrinho.splice(indice, 1);


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    atualizarCarrinho();
}


// ========================================
// PAGAMENTO NO MESMO PAINEL
// ========================================

function irParaPagamento() {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }


    const lista =
        document.getElementById("listaCarrinho");


    const total =
        document.getElementById("totalCarrinho")
            .textContent;


    lista.innerHTML = `

        <div class="pagamento-painel">

            <button
                type="button"
                onclick="voltarParaCarrinho()"
                style="
                    background:none;
                    border:none;
                    color:white;
                    cursor:pointer;
                    font-size:16px;
                    margin-bottom:20px;
                "
            >
                ← Voltar para o carrinho
            </button>


            <h2>
                💳 Pagamento
            </h2>


            <p>
                Escolha uma forma de pagamento:
            </p>


            <label
                style="
                    display:block;
                    padding:15px;
                    margin:10px 0;
                    background:rgba(255,255,255,0.08);
                    border-radius:10px;
                    cursor:pointer;
                "
            >

                <input
                    type="radio"
                    name="formaPagamento"
                    value="pix"
                    checked
                >

                🟢 PIX

            </label>


            <label
                style="
                    display:block;
                    padding:15px;
                    margin:10px 0;
                    background:rgba(255,255,255,0.08);
                    border-radius:10px;
                    cursor:pointer;
                "
            >

                <input
                    type="radio"
                    name="formaPagamento"
                    value="credito"
                >

                💳 Cartão de crédito

            </label>


            <label
                style="
                    display:block;
                    padding:15px;
                    margin:10px 0;
                    background:rgba(255,255,255,0.08);
                    border-radius:10px;
                    cursor:pointer;
                "
            >

                <input
                    type="radio"
                    name="formaPagamento"
                    value="debito"
                >

                💳 Cartão de débito

            </label>


            <div
                style="
                    margin-top:25px;
                    padding:15px;
                    background:rgba(0,0,0,0.2);
                    border-radius:10px;
                "
            >

                <span>
                    Total:
                </span>

                <strong>
                    ${total}
                </strong>

            </div>


            <button
                type="button"
                onclick="finalizarPagamento()"
                style="
                    width:100%;
                    margin-top:20px;
                    padding:15px;
                    border:none;
                    border-radius:10px;
                    background:linear-gradient(90deg,#3155ff,#8e44ad);
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                    font-size:15px;
                "
            >

                ✅ FINALIZAR PAGAMENTO

            </button>

        </div>

    `;


    /*
       Esconde o rodapé do carrinho
       enquanto o pagamento está aberto.
    */

    document.querySelector(".rodape-carrinho").style.display =
        "none";
}


// ========================================
// VOLTAR PARA O CARRINHO
// ========================================

function voltarParaCarrinho() {

    document.querySelector(".rodape-carrinho").style.display =
        "block";


    atualizarCarrinho();
}


// ========================================
// FINALIZAR PAGAMENTO
// ========================================

function finalizarPagamento() {

    const forma =
        document.querySelector(
            'input[name="formaPagamento"]:checked'
        );


    if (!forma) {

        alert("Escolha uma forma de pagamento.");

        return;
    }


    alert(
        "Pagamento simulado com sucesso! 🎉\n\n" +
        "Forma de pagamento: " +
        forma.value
    );


    localStorage.removeItem("carrinho");


    atualizarCarrinho();


    document.querySelector(".rodape-carrinho").style.display =
        "block";


    fecharCarrinho();
}


// ========================================
// INICIAR
// ========================================

carregarProduto();

