// ========================================
// PEGAR ID DA PROMOÇÃO
// ========================================

const parametros = new URLSearchParams(
    window.location.search
);

const idPromocao =
    parametros.get("id") || "1";

const produtoPromocao =
    produtosPromocao[idPromocao] ||
    produtosPromocao[1];


// ========================================
// VARIÁVEIS
// ========================================

let modeloSelecionado = null;
let tamanhoSelecionado = null;


// ========================================
// CARREGAR PRODUTO
// ========================================

function carregarProdutoPromocao() {

    document.getElementById("categoriaProduto").textContent =
        produtoPromocao.categoria;

    document.getElementById("nomeProduto").textContent =
        produtoPromocao.nome;

    document.getElementById("precoProduto").textContent =
        produtoPromocao.precoPromocional;

    document.getElementById("descricaoProduto").textContent =
        produtoPromocao.descricao;


    // DESCONTO

    const desconto =
        document.getElementById("descontoProduto");

    if (desconto) {

        desconto.textContent =
            produtoPromocao.desconto + "% OFF";
    }


    // VALIDADE

    const validade =
        document.getElementById("validadeProduto");

    if (validade) {

        validade.textContent =
            "Oferta válida até " +
            produtoPromocao.validade;
    }


    criarMiniaturasPromocao();

    configurarTamanhosPromocao();
}


// ========================================
// CRIAR MINIATURAS
// ========================================

function criarMiniaturasPromocao() {

    const area =
        document.getElementById("miniaturas");

    area.innerHTML = "";

    produtoPromocao.variacoes.forEach(
        function(variacao) {

            const imagem =
                document.createElement("img");

            imagem.src =
                variacao.imagem;

            imagem.alt =
                variacao.nome;

            imagem.dataset.nome =
                variacao.nome;

            imagem.dataset.especificacao =
                variacao.especificacao;

            imagem.onclick =
                function() {

                    trocarModeloPromocao(imagem);
                };

            area.appendChild(imagem);
        }
    );


    const primeiraImagem =
        area.querySelector("img");

    if (primeiraImagem) {

        trocarModeloPromocao(
            primeiraImagem
        );
    }
}


// ========================================
// TROCAR MODELO
// ========================================

function trocarModeloPromocao(imagem) {

    document.getElementById(
        "imagemPrincipal"
    ).src = imagem.src;


    document.getElementById(
        "nomeModelo"
    ).textContent =
        imagem.dataset.nome;


    document.getElementById(
        "especificacaoModelo"
    ).textContent =
        imagem.dataset.especificacao;


    modeloSelecionado = {

        nome: imagem.dataset.nome,

        especificacao:
            imagem.dataset.especificacao,

        imagem: imagem.src
    };


    const miniaturas =
        document.querySelectorAll(
            ".miniaturas img"
        );


    miniaturas.forEach(
        function(item) {

            item.classList.remove(
                "selecionada"
            );
        }
    );


    imagem.classList.add(
        "selecionada"
    );
}


// ========================================
// TAMANHOS
// ========================================

function configurarTamanhosPromocao() {

    const area =
        document.getElementById(
            "areaTamanhos"
        );

    const tamanhos =
        document.getElementById(
            "tamanhos"
        );

    tamanhos.innerHTML = "";


    if (
        produtoPromocao.temTamanho === true
    ) {

        area.style.display = "block";


        produtoPromocao.tamanhos.forEach(
            function(tamanho) {

                const botao =
                    document.createElement(
                        "button"
                    );

                botao.type = "button";

                botao.textContent =
                    tamanho;


                botao.onclick =
                    function() {

                        selecionarTamanhoPromocao(
                            botao
                        );
                    };


                tamanhos.appendChild(
                    botao
                );
            }
        );

    } else {

        area.style.display = "none";
    }
}


// ========================================
// SELECIONAR TAMANHO
// ========================================

function selecionarTamanhoPromocao(
    botao
) {

    const botoes =
        document.querySelectorAll(
            ".tamanhos button"
        );


    botoes.forEach(
        function(item) {

            item.classList.remove(
                "selecionado"
            );
        }
    );


    botao.classList.add(
        "selecionado"
    );


    tamanhoSelecionado =
        botao.textContent;
}


// ========================================
// PEGAR PRODUTO SELECIONADO
// ========================================

function pegarProdutoPromocaoSelecionado() {

    return {

        id:
            "promocao-" +
            idPromocao,

        nome:
            produtoPromocao.nome,

        categoria:
            produtoPromocao.categoria,

        preco:
            produtoPromocao.precoPromocional,

        precoOriginal:
            produtoPromocao.precoOriginal,

        desconto:
            produtoPromocao.desconto,

        tamanho:
            tamanhoSelecionado ||
            "Não se aplica",

        modelo:
            modeloSelecionado?.nome ||
            "",

        especificacao:
            modeloSelecionado?.especificacao ||
            "",

        imagem:
            modeloSelecionado?.imagem ||
            document.getElementById(
                "imagemPrincipal"
            ).src,

        quantidade: 1,

        promocao: true
    };
}


// ========================================
// ADICIONAR AO CARRINHO
// ========================================

function adicionarAoCarrinhoPromocao() {

    if (
        produtoPromocao.temTamanho === true &&
        !tamanhoSelecionado
    ) {

        alert(
            "Selecione um tamanho antes de adicionar ao carrinho."
        );

        return;
    }


    const produtoSelecionado =
        pegarProdutoPromocaoSelecionado();


    let carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


    // VERIFICA SE JÁ EXISTE

    const existente =
        carrinho.find(
            function(item) {

                return (

                    item.id ===
                    produtoSelecionado.id &&

                    item.tamanho ===
                    produtoSelecionado.tamanho &&

                    item.modelo ===
                    produtoSelecionado.modelo
                );
            }
        );


    if (existente) {

        existente.quantidade += 1;

    } else {

        carrinho.push(
            produtoSelecionado
        );
    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    // ABRIR CARRINHO

    abrirCarrinho();
}


// ========================================
// BOTÃO DE COMPRA
// ========================================

function comprarProdutoPromocao() {

    adicionarAoCarrinhoPromocao();
}


// ========================================
// ABRIR CARRINHO
// ========================================

function abrirCarrinho() {

    atualizarCarrinhoPromocao();


    document
        .getElementById(
            "carrinhoLateral"
        )
        .classList.add(
            "aberto"
        );


    document
        .getElementById(
            "fundoCarrinho"
        )
        .classList.add(
            "aberto"
        );
}


// ========================================
// FECHAR CARRINHO
// ========================================

function fecharCarrinho() {

    document
        .getElementById(
            "carrinhoLateral"
        )
        .classList.remove(
            "aberto"
        );


    document
        .getElementById(
            "fundoCarrinho"
        )
        .classList.remove(
            "aberto"
        );
}


// ========================================
// ATUALIZAR CARRINHO
// ========================================

function atualizarCarrinhoPromocao() {

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


    const lista =
        document.getElementById(
            "listaCarrinho"
        );


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


    carrinho.forEach(
        function(produto, indice) {

            const preco =
                converterPreco(
                    produto.preco
                );


            const quantidade =
                produto.quantidade || 1;


            total +=
                preco * quantidade;


            const item =
                document.createElement(
                    "div"
                );


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
                            onclick="alterarQuantidadePromocao(${indice}, -1)"
                        >
                            −
                        </button>


                        <span>
                            ${quantidade}
                        </span>


                        <button
                            type="button"
                            onclick="alterarQuantidadePromocao(${indice}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    type="button"
                    class="remover-item"
                    onclick="removerDoCarrinhoPromocao(${indice})"
                >
                    ×
                </button>

            `;


            lista.appendChild(item);
        }
    );


    document.getElementById(
        "totalCarrinho"
    ).textContent =
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

function alterarQuantidadePromocao(
    indice,
    valor
) {

    let carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


    if (!carrinho[indice]) {

        return;
    }


    carrinho[indice].quantidade =
        (
            carrinho[indice].quantidade ||
            1
        ) + valor;


    if (
        carrinho[indice].quantidade <= 0
    ) {

        carrinho.splice(
            indice,
            1
        );
    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    atualizarCarrinhoPromocao();
}


// ========================================
// REMOVER PRODUTO
// ========================================

function removerDoCarrinhoPromocao(
    indice
) {

    let carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


    carrinho.splice(
        indice,
        1
    );


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    atualizarCarrinhoPromocao();
}


// ========================================
// IR PARA PAGAMENTO
// ========================================

function irParaPagamento() {

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio!"
        );

        return;
    }


    const lista =
        document.getElementById(
            "listaCarrinho"
        );


    const total =
        document.getElementById(
            "totalCarrinho"
        ).textContent;


    lista.innerHTML = `

        <div class="pagamento-painel">

            <button
                type="button"
                class="botao-voltar-pagamento"
                onclick="voltarParaCarrinho()"
            >
                ← Voltar para o carrinho
            </button>


            <h2>
                💳 Pagamento
            </h2>


            <p>
                Escolha uma forma de pagamento:
            </p>


            <label class="opcao-pagamento">

                <input
                    type="radio"
                    name="formaPagamentoPromocao"
                    value="pix"
                    checked
                >

                🟢 PIX

            </label>


            <label class="opcao-pagamento">

                <input
                    type="radio"
                    name="formaPagamentoPromocao"
                    value="credito"
                >

                💳 Cartão de crédito

            </label>


            <label class="opcao-pagamento">

                <input
                    type="radio"
                    name="formaPagamentoPromocao"
                    value="debito"
                >

                💳 Cartão de débito

            </label>


            <div class="total-pagamento">

                <span>
                    Total:
                </span>

                <strong>
                    ${total}
                </strong>

            </div>


            <button
                type="button"
                class="botao-pagamento"
                onclick="finalizarPagamentoPromocao()"
            >
                ✅ FINALIZAR PAGAMENTO
            </button>

        </div>

    `;


    const rodape =
        document.querySelector(
            ".rodape-carrinho"
        );


    if (rodape) {

        rodape.style.display =
            "none";
    }
}


// ========================================
// VOLTAR PARA O CARRINHO
// ========================================

function voltarParaCarrinho() {

    const rodape =
        document.querySelector(
            ".rodape-carrinho"
        );


    if (rodape) {

        rodape.style.display =
            "block";
    }


    atualizarCarrinhoPromocao();
}


// ========================================
// FINALIZAR PAGAMENTO
// ========================================

function finalizarPagamentoPromocao() {

    const forma =
        document.querySelector(
            'input[name="formaPagamentoPromocao"]:checked'
        );


    if (!forma) {

        alert(
            "Escolha uma forma de pagamento."
        );

        return;
    }


    alert(

        "Pagamento simulado com sucesso! 🎉\n\n" +

        "Forma de pagamento: " +

        forma.value
    );


    localStorage.removeItem(
        "carrinho"
    );


    atualizarCarrinhoPromocao();


    const rodape =
        document.querySelector(
            ".rodape-carrinho"
        );


    if (rodape) {

        rodape.style.display =
            "block";
    }


    fecharCarrinho();
}


// ========================================
// LIGAR O BOTÃO EXISTENTE
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const botao =
            document.querySelector(
                ".botao-carrinho"
            );


        if (botao) {

            botao.onclick =
                adicionarAoCarrinhoPromocao;
        }


        carregarProdutoPromocao();
    }
);