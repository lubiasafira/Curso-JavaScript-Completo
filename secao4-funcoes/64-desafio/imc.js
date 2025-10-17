(function () {
    let imc = calcularImc(59, 1.63)

    console.log(classificarImc(imc))
})()

function calcularImc(peso, altura) {
    if (typeof peso != "number" || typeof altura != "number") {
        throw Error("Somente números")
    }

    if (typeof peso === "undefined" || typeof altura === "undefined") {
        throw Error("Paramentros não devem ser vazios")
    }

    let imc = peso / (altura ** 2)

    return imc
}

function classificarImc(imc) {
    if (typeof imc != "number") {
        throw Error("O imc deve ser número")
    }

    if (typeof imc === "undefined") {
        throw ("Nenhum parametro recebido")
    }

    let classificacao = ""

    if (imc <= 16.9) {
        classificacao = "Muito abaixo do peso"
    } else if (imc <= 18.4) {
        classificacao = "Abaixo do peso"
    } else if (imc <= 24.9) {
        classificacao = "peso normal"
    } else if (imc <= 29.9) {
        classificacao = "Acima do peso"
    } else {
        classificacao = "Obeso"
    }

    return classificacao
}