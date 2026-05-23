// ===============================
// VARIÁVEIS DO SISTEMA
// ===============================

let contador = 0;
let totalEstoqueBaixo = 0;

let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";

const botaocadastro =
    document.getElementById("cadastro");

const botaoSobre =
    document.getElementById("sobre");

// ===============================
// LISTA DE VINHOS
// ===============================

let vinhos = [

    {
        nome: "Monteluce Reserva",
        tipo: "Branco",
        safra: 2018,
        estoque: 10
    },

    {
        nome: "Vale Rosso Premium",
        tipo: "Tinto",
        safra: 2015,
        estoque: 3
    },

    {
        nome: "Rosé Firenze",
        tipo: "Rosé",
        safra: 2021,
        estoque: 2
    }

];

// ===============================
// ESTOQUE BAIXO
// ===============================

function estoqueBaixo(quantidade) {

    return quantidade < 5;

}

// ===============================
// VALIDAR TEXTO
// ===============================

function validarEntrada(texto) {

    while (
        texto === null ||
        texto.trim() === ""
    ) {

        texto = prompt(
            "Entrada inválida. Digite novamente:"
        );

    }

    return texto.trim();

}

// ===============================
// VALIDAR NÚMERO
// ===============================

function validarNumero(numero) {

    while (
        isNaN(numero) ||
        numero < 0
    ) {

        numero = Number(
            prompt("Digite um número válido:")
        );

    }

    return numero;

}

// ===============================
// CLASSIFICAR VINHO
// ===============================

function classificarVinho(safra) {

    let anoAtual = 2026;

    let idade = anoAtual - safra;

    if (idade <= 5) {

        return "Vinho Jovem";

    }

    else if (idade <= 15) {

        return "Vinho Amadurecido";

    }

    else {

        return "Vinho Antigo";

    }

}

// ===============================
// MOSTRAR DADOS
// ===============================

function mostrarDados(
    nome,
    tipo,
    safra,
    quantidade,
    classificacao
) {

    console.log(
        "===== DADOS DO VINHO ====="
    );

    console.log("Nome: " + nome);

    console.log("Tipo: " + tipo);

    console.log("Safra: " + safra);

    console.log(
        "Quantidade em estoque: " +
        quantidade
    );

    console.log(
        "Classificação: " +
        classificacao
    );

}

// ===============================
// BOTÃO CADASTRAR
// ===============================

botaocadastro.addEventListener(

    "click",

    function () {

        let continuar = true;

        while (continuar) {

            let nome = validarEntrada(

                prompt(
                    "Digite o nome do vinho:"
                )

            );

            let tipo = validarEntrada(

                prompt(
                    "Digite o tipo do vinho:"
                )

            );

            let safra = validarNumero(

                Number(
                    prompt(
                        "Digite a safra do vinho:"
                    )
                )

            );

            let quantidade = validarNumero(

                Number(
                    prompt(
                        "Digite a quantidade em estoque:"
                    )
                )

            );

            let classificacao =
                classificarVinho(safra);

            mostrarDados(
                nome,
                tipo,
                safra,
                quantidade,
                classificacao
            );

            // ===============================
            // NOVO VINHO
            // ===============================

            let novoVinho = {

                nome: nome,
                tipo: tipo,
                safra: safra,
                estoque: quantidade

            };

            // ADICIONAR AO ARRAY
            vinhos.push(novoVinho);

            // MOSTRAR NOVO CARD
            let container =
                document.getElementById(
                    "novos-vinhos"
                );

            container.innerHTML += `

                <div class="card">

                    <h3>${novoVinho.nome}</h3>

                    <img
                        src="./src/assets/vinho_10.png"
                        alt="vinho"
                    >

                    <p>
                        Tipo: ${novoVinho.tipo}<br>
                        Safra: ${novoVinho.safra}
                    </p>

                    <div class="preco">
                        Estoque:
                        ${novoVinho.estoque}
                    </div>

                </div>

            `;

            contador++;

            // ===============================
            // ESTOQUE BAIXO
            // ===============================

            if (
                estoqueBaixo(quantidade)
            ) {

                totalEstoqueBaixo++;

            }

            // ===============================
            // VINHO MAIS ANTIGO
            // ===============================

            if (
                safra < safraMaisAntiga
            ) {

                safraMaisAntiga = safra;

                vinhoMaisAntigo = nome;

            }

            // ===============================
            // CONTINUAR
            // ===============================

            let resposta =
                validarEntrada(

                    prompt(
                        "Deseja cadastrar outro vinho? (sim/não)"
                    )

                );

            if (
                resposta.toLowerCase() !==
                "sim"
            ) {

                continuar = false;

            }

        }

        // ===============================
        // RELATÓRIO FINAL
        // ===============================

        alert(

            "===== RELATÓRIO FINAL =====" +

            "\nTotal de vinhos cadastrados: " +
            contador +

            "\nTotal com estoque baixo: " +
            totalEstoqueBaixo +

            "\nVinho mais antigo: " +
            vinhoMaisAntigo +

            "\nSafra mais antiga: " +
            safraMaisAntiga

        );

        alert(

            "Cadastro finalizado!\n\n" +

            "Para visualizar os resultados:\n\n" +

            "Pressione F12\n\n" +

            "ou\n\n" +

            "CTRL + SHIFT + I\n\n" +

            "Depois abra a aba CONSOLE."

        );

        // ===============================
        // LISTA DE VINHOS
        // ===============================

        console.log(
            "===== LISTA DE VINHOS ====="
        );

        vinhos.forEach(function (vinho) {

            console.log(

                vinho.nome +
                " | " +

                vinho.tipo +
                " | Safra: " +

                vinho.safra +
                " | Estoque: " +

                vinho.estoque

            );

        });

        // ===============================
        // ESTOQUE BAIXO
        // ===============================

        let estoqueBaixoLista =
            vinhos.filter(
                function (vinho) {

                    return vinho.estoque < 5;

                }
            );

        console.log(
            "===== VINHOS COM ESTOQUE BAIXO ====="
        );

        estoqueBaixoLista.forEach(
            function (vinho) {

                console.log(

                    vinho.nome +
                    " | Estoque: " +

                    vinho.estoque

                );

            }
        );

        // ===============================
        // NOMES EM MAIÚSCULO
        // ===============================

        let nomesMaiusculos =
            vinhos.map(
                function (vinho) {

                    return vinho.nome.toUpperCase();

                }
            );

        console.log(
            "===== NOMES EM MAIÚSCULO ====="
        );

        nomesMaiusculos.forEach(
            function (nome) {

                console.log(nome);

            }
        );

        // ===============================
        // ESTOQUE TOTAL
        // ===============================

        let estoqueTotal =
            vinhos.reduce(

                function (
                    total,
                    vinho
                ) {

                    return (
                        total +
                        vinho.estoque
                    );

                },

                0

            );

        console.log(
            "===== ESTOQUE TOTAL ====="
        );

        console.log(estoqueTotal);

    }

);

// ===============================
// BOTÃO SOBRE
// ===============================

botaoSobre.addEventListener(

    "click",

    function () {

        alert(

            "A Vinharia Agnello é um sistema " +

            "de gerenciamento de vinhos que " +

            "possibilita cadastrar informações, " +

            "organizar o estoque e classificar " +

            "automaticamente cada vinho."

        );

    }

);

// ===============================
// VINHO 1
// ===============================

function mostrarVinho1() {

    alert(

        "Monteluce Reserva\n\n" +

        "Um vinho sofisticado com notas " +

        "tropicais e acabamento suave."

    );

}

// ===============================
// VINHO 2
// ===============================

function mostrarVinho2() {

    alert(

        "Vale Rosso Premium\n\n" +

        "Intenso, encorpado e marcante, " +

        "direto dos vinhedos de Mendoza."

    );

}