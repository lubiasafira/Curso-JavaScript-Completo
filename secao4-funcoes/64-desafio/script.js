(function () {
    console.log(calcularMedia(2, "3", 4, 10))
})()


function calcularMedia() {
    let somaElementos = 0
    let numElementos = arguments.length

    // se arguments é está vazio
    if (numElementos === 0) {
        return 0
    }

    for (let i in arguments) {
        if (typeof arguments[i] != "number") {
            throw Error("Only numbers in parameters")
        }

        somaElementos += arguments[i]
    }

    let media = somaElementos / numElementos

    return media
}