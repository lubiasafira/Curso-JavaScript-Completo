function sum() {
    // Array.from(arguments) transforma "arguments" (que é array-like) em um array de verdade
    // Assim podemos usar métodos de array, como .reduce()
    let num = Array.from(arguments)

    // reduce() percorre todo o array acumulando os valores
    // acumulador = soma parcial
    // valorAtual = cada elemento do array
    let sum = num.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual
    })

    // Retorna a soma final
    return sum
}

function avarege() {
    // Verifica se TODOS os argumentos são números
    // .every() só retorna true se todos passarem no teste
    let isAllNum = Array.from(arguments).every(function (el) {
        return typeof el === "number"
    })

    // Se algum não for número, retorna 0 (para evitar erros)
    if (!isAllNum) {
        return 0
    }

    // Quantidade de elementos recebidos
    let numElementos = arguments.length

    // Reaproveitamos a função sum(), mas usando o spread (...arguments)
    // Spread pega cada elemento e "espalha" como parâmetro individual
    let sumElem = sum(...arguments)

    // Média = soma total dividido pela quantidade
    return sumElem / numElementos
}

let res = avarege(2, 3, 4)

// Exibe o resultado da média
console.log(res)
