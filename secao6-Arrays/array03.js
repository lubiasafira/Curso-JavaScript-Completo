// concat()
// join()
// toString()

let array01 = [1, 2, 3]
let array02 = [5, 6, 7]

/*
    📌 concat()
    - Une dois (ou mais) arrays e retorna um NOVO array.
    - Não altera os arrays originais.
*/
let arrayConcatenado = array01.concat(array02)
console.log("Resultado do concat():", arrayConcatenado)



/*
    📌 join()
    - Junta todos os elementos do array em uma única string.
    - Você define o separador dentro dos parênteses.
*/
let usandoJoin = arrayConcatenado.join(" - ")
console.log("Resultado do join():", usandoJoin)



/*
    📌 toString()
    - Converte o array inteiro para string.
    - Usa vírgula como separador padrão.
    - É bem parecido com usar join(",").
*/
let usandoToString = arrayConcatenado.toString()
console.log("Resultado do toString():", usandoToString)
