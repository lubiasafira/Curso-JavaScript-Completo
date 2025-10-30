// Cria um array com vários tipos de elementos: números, string, booleano e até um "buraco" (índice vazio)
const arr = [1, 2, , 4, 5, 6, 7, "ola", true]

// Usa o método .every() para verificar se **todos** os elementos do array são números
// A função de callback é chamada para cada elemento, e deve retornar true ou false
// O método .every() só retornará true se **todos** os retornos forem true
let apenasNumeros = arr.every(
    function (el) {
        return typeof el === "number"
    })

console.log(`Todos são números:${apenasNumeros}`)


// Aqui o código tenta verificar se existe **algum** número no array
// (o .some() retorna true se **pelo menos um** elemento atender à condição)

let algumNumero = arr.some(
    function (el) {
        return typeof el === "number"
    })

console.log(`existe algum número ?:${algumNumero}`)


// O método .filter() percorre o array e cria um novo array
// contendo apenas os elementos que retornam "true" na função de teste
const numerosFiltrados = arr.filter(function (elemento, indice, array) {

    // Este console.log serve para mostrar o que o filter envia para a função:
    // - elemento: o valor atual do array (ex: 1, 2, "ola", true, etc)
    // - indice: a posição do elemento no array
    // - array: o array completo (sempre será o mesmo "arr")
    console.log(`elemento: ${elemento}; indice: ${indice}; array: ${array}`)

    // Aqui definimos a condição: só queremos elementos do tipo "number"
    // Se o resultado for true, o elemento é incluído no novo array
    return typeof elemento === "number"
})

// Por fim, exibimos o novo array gerado pelo filter
console.log(numerosFiltrados)

// O método .forEach() percorre todos os elementos do array
// e executa uma função para cada um deles
arr.forEach(function (elemento, indice, array) {
    console.log(`lemento: ${elemento}; indice: ${indice}; array:${array}`)

    // Aqui poderíamos executar qualquer ação, como:
    // verificar tipos, somar valores, ou exibir mensagens personalizadas.
    if (typeof elemento === "number") {
        console.log(`→ O elemento ${elemento} é um número.`)
    } else {
        console.log(`→ O elemento ${elemento} NÃO é um número.`)
    }
})


let numerosTransformados = arr.map(function (elemento, indice, array) {

    // Verifica se o elemento atual é um número
    if (typeof elemento === "number") {

        // Se for número, multiplica por 2
        return elemento * 2
    }
    else {

        // Se não for número (ex: string, booleano, ou "buraco"),
        // retorna 0 no lugar — ou seja, substitui por um valor padrão
        return 0
    }
})

console.log(`Números transformados: ${numerosTransformados}`)