let array = [1, 2, 3]

console.log(array.reverse())

console.log(array)


let sum = array.reduce(function (acumulador, valorAtual, indice, array) {
    console.log("indice: " + indice)
    console.log("array: " + array)

    return acumulador + valorAtual
})

console.log(sum)