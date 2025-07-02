function jogoNumeroSecreto() {
    alert('Seja bem-vindo ao nosso jogo!');

    let numeroSecreto = 5;
    console.log(numeroSecreto);

    let chute;
    let tentativas = 0;

    while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++; 

    if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else {
    alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }
    }
}

function jogoMedia() {
    alert("Bem-vindo ao Jogo da Média!");

    let quantidade = prompt("Quantos números você quer digitar?");
    quantidade = Number(quantidade);

    if (quantidade <= 0 || quantidade === null || quantidade === "" || typeof quantidade !== "number") {
    alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    } else {
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
        let entrada = prompt(`Digite o ${i}º número:`);
        let numero = Number(entrada);

        if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
        alert("Valor inválido. Digite um número.");
        i--; 
        continue;
        }

        soma += numero;
    }

    let media = soma / quantidade;

    alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);
    } 
}

function carregarMetodoLista() {
    
    fetch("metodolista.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const conteudo = doc.body.innerHTML;

            const container = document.getElementById("conteudo") || criarContainer();

            container.innerHTML = conteudo;

            const script = document.createElement("script");
            script.src = "metodolista.js";
            document.body.appendChild(script);

            const linkCSS = document.createElement("link");
            linkCSS.rel = "stylesheet";
            linkCSS.href = "metodolista.css";
            document.head.appendChild(linkCSS);
        })
        .catch(error => console.error("Erro ao carregar o método lista:", error));
}

function criarContainer() {
    const div = document.createElement("div");
    div.id = "conteudo";
    document.body.appendChild(div);
    return div;
}
