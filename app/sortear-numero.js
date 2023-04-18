function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor+1))
}

const menorValor = 1
const maiorValor = 100
const elementoMenorValor = document.querySelector("#menor-valor")
const elementoMaiorValor = document.querySelector("#maior-valor")

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor
const numeroSecreto = gerarNumeroAleatorio()

