function validaNumero(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: precisa ser um número</div>`
        return
    }

    if(verificaRange(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="botao" onclick="window.location.reload()">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down fa-bounce"></i> <i class="fa-sharp fa-solid fa-angle-down fa-bounce"></i></div>`

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up fa-bounce"></i> <i class="fa-sharp fa-solid fa-angle-up fa-bounce"></i></div>`
    }
}

function verificaRange(numero) {
    return numero < menorValor || numero > maiorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

 

