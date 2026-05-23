// ===============================
// VARIÁVEIS DO SISTEMA
// ===============================

let contador = 0;
let totalEstoqueBaixo = 0;

let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";

const botaoCadastro = document.getElementById("cadastro");
const botaoSobre = document.getElementById("sobre");

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
    },

    {
        nome: "Quartzo Branco",
        tipo: "Branco",
        safra: 2020,
        estoque: 8
    },

    {
        nome: "Aurora Rosé",
        tipo: "Rosé",
        safra: 2022,
        estoque: 5
    },

    {
        nome: "Imperium Noir",
        tipo: "Tinto",
        safra: 2012,
        estoque: 4
    },

    {
        nome: "Veluna Classic",
        tipo: "Tinto",
        safra: 2016,
        estoque: 6
    },

    {
        nome: "Terra Nobile",
        tipo: "Tinto",
        safra: 2014,
        estoque: 7
    }

];

// ===============================
// FUNÇÃO ESTOQUE BAIXO
// ===============================

function estoqueBaixo(quantidade) {

    return quantidade < 5;

}

// ===============================
// VALIDAR TEXTO
// ===============================

function validarEntrada(texto) {

    while (texto === null || texto.trim() === "") {

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

    while (isNaN(numero) || numero < 0) {

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

    console.log("===== DADOS DO VINHO =====");

    console.log("Nome: " + nome);

    console.log("Tipo: " + tipo);

    console.log("Safra: " + safra);

    console.log(
        "Quantidade em estoque: " + quantidade
    );

    console.log(
        "Classificação: " + classificacao
    );

}

// ===============================
// BOTÃO CADASTRAR
// ===============================

botaoCadastro.addEventListener(
    "click",

    function () {

        let continuar = true;

        while (continuar) {

            let nome = validarEntrada(
                prompt("Digite o nome do vinho:")
            );

            let tipo = validarEntrada(
                prompt("Digite o tipo do vinho:")
            );

            let safra = validarNumero(
                Number(
                    prompt("Digite a safra do vinho:")
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

            vinhos.push({

                nome: nome,
                tipo: tipo,
                safra: safra,
                estoque: quantidade

            });

            contador++;

            if (estoqueBaixo(quantidade)) {

                totalEstoqueBaixo++;

            }

            if (safra < safraMaisAntiga) {

                safraMaisAntiga = safra;

                vinhoMaisAntigo = nome;

            }

            let resposta = validarEntrada(
                prompt(
                    "Deseja cadastrar outro vinho? (sim/não)"
                )
            );

            if (
                resposta.toLowerCase() !== "sim"
            ) {

                continuar = false;

            }

        }

        // ===============================
        // RELATÓRIO FINAL
        // ===============================

        alert(

            "===== RELATÓRIO FINAL =====" +

            "\nTotal cadastrados: " +
            contador +

            "\nEstoque baixo: " +
            totalEstoqueBaixo +

            "\nVinho mais antigo: " +
            vinhoMaisAntigo +

            "\nSafra mais antiga: " +
            safraMaisAntiga

        );

        alert(

            "Cadastro finalizado!\n\n" +

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
        // VINHOS COM ESTOQUE BAIXO
        // ===============================

        let estoqueBaixoLista =
            vinhos.filter(function (vinho) {

                return vinho.estoque < 5;

            });

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
            vinhos.map(function (vinho) {

                return vinho.nome.toUpperCase();

            });

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

                function (total, vinho) {

                    return total + vinho.estoque;

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

            "automaticamente cada vinho conforme sua safra."

        );

    }

);

// ===============================
// VINHO DESTAQUE 1
// ===============================

function mostrarVinho1() {

    alert(

        "Monteluce Reserva\n\n" +

        "Um vinho sofisticado com notas " +

        "tropicais e acabamento suave.\n\n" +

        "Tipo: Branco\n" +

        "Preço: R$ 169,90"

    );

}

// ===============================
// VINHO DESTAQUE 2
// ===============================

function mostrarVinho2() {

    alert(

        "Vale Rosso Premium\n\n" +

        "Intenso, encorpado e marcante, " +

        "direto dos vinhedos de Mendoza.\n\n" +

        "Tipo: Tinto\n" +

        "Preço: R$ 239,90"

    );

}