// Criamos um array com vários tipos de elementos:
// - números
// - string
// - booleano
// - e até um "buraco" (índice vazio, entre 2 e 4)
const arr = [1, 2, , 4, 5, 6, 7, "ola", true]

// ------------------------------------------------------
// array.every()
// ------------------------------------------------------
{
    // O método every() verifica se **TODOS** os elementos do array
    // passam em um teste (função de callback).
    //
    // Ele retorna:
    //   - true  → se todos atenderem à condição
    //   - false → se pelo menos UM não atender
    //
    // Aqui vamos verificar se todos os elementos são do tipo "number".
    let apenasNumeros = arr.every(function (elemento) {

        // Retornamos true APENAS se o tipo for "number"
        return typeof elemento === "number"
    })

    // Exibimos o resultado
    console.log(`every() → Todos são números?: ${apenasNumeros}`)
}

// ------------------------------------------------------
// array.some()
// ------------------------------------------------------
{
    // O método some() verifica se **PELO MENOS UM** elemento
    // passa no teste fornecido.
    //
    // Ele retorna:
    //   - true  → se algum elemento atender à condição
    //   - false → se nenhum atender
    //
    // Aqui vamos verificar se existe pelo menos um número no array.
    let algumNumero = arr.some(function (elemento) {

        return typeof elemento === "number"
    })

    console.log(`some() → Existe algum número?: ${algumNumero}`)
}

// ------------------------------------------------------
// array.filter()
// ------------------------------------------------------
{
    // O método filter() cria um NOVO array contendo apenas
    // os elementos que passarem no teste da função callback.
    //
    // Ele não altera o array original.
    //
    // Aqui vamos filtrar somente os elementos do tipo "number".
    const numerosFiltrados = arr.filter(function (elemento, indice, arrayCompleto) {

        // Mostrando todos os argumentos que o filter() envia:
        console.log(`filter() → elemento: ${elemento}; índice: ${indice}; arrayCompleto: ${arrayCompleto}`)

        // Retornamos true apenas para números
        return typeof elemento === "number"
    })

    // Exibimos o novo array criado
    console.log(`filter() → Números filtrados: ${numerosFiltrados}`)
}

// ------------------------------------------------------
// array.forEach()
// ------------------------------------------------------
{
    // O método forEach() percorre todos os elementos do array,
    // executando uma função para cada item.
    //
    // Diferente de map(), forEach() NÃO retorna um novo array.
    arr.forEach(function (elemento, indice, arrayCompleto) {

        console.log(`forEach() → elemento: ${elemento}; índice: ${indice}; array: ${arrayCompleto}`)

        // Podemos realizar qualquer ação para cada item:
        if (typeof elemento === "number") {
            console.log(`→ O elemento ${elemento} é um número.`)
        } else {
            console.log(`→ O elemento ${elemento} NÃO é um número.`)
        }
    })
}

// ------------------------------------------------------
// array.map()
// ------------------------------------------------------
{
    // O método map() cria um NOVO array transformando cada elemento
    // de acordo com a regra definida na função callback.
    //
    // Aqui vamos:
    //   - multiplicar números por 2
    //   - substituir qualquer outro tipo (string, booleano, buraco) por 0
    let numerosTransformados = arr.map(function (elemento) {

        if (typeof elemento === "number") {

            // Se for número, aplica a transformação
            return elemento * 2
        }
        else {

            // Se não for número, retorna um valor padrão
            return 0
        }
    })

    console.log(`map() → Números transformados: ${numerosTransformados}`)
}
