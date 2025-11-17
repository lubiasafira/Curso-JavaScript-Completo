// Exemplos didáticos de métodos de busca em arrays no JavaScript
// Arquivo organizado por seções independentes usando blocos {}

// array.indexOf()
// array.lastIndexOf()
// array.includes()
// array.findIndex()
// array.find()

// Aqui definimos o número que queremos procurar dentro do array.
// Você pode alterar esse valor para testar outros casos.
let numberSelected = 5

// Criamos um array com vários números.
// Note que alguns números se repetem dentro da lista.
let array = [4, 5, 10, 20, 35, 4, 5]


// array.indexOf()
{
    // O método indexOf() procura no array o valor que colocarmos como argumento.
    // Ele devolve:
    //   - a posição (índice) onde o valor foi encontrado pela primeira vez
    //   - ou -1 caso o valor NÃO exista no array.
    let findFirstPosition = array.indexOf(numberSelected)


    // Aqui verificamos se o valor retornado pelo indexOf() é diferente de -1.
    // Se for diferente, significa que o número foi encontrado.
    if (findFirstPosition != -1) {

        // Exibe a posição encontrada no console.
        // Lembre-se: posições em arrays começam do zero!
        // Então "0ª posição" significa o primeiro item do array.
        console.log(`Número ${numberSelected} encontrado na ${findFirstPosition}ª posição.`)
    }

    // Caso contrário, se o indexOf() devolveu -1, o número não existe dentro do array.
    else {
        console.log(`O número ${numberSelected} não foi encontrado em nenhuma posição.`)
    }
}

// array.lastIndexOf()
{
    // Usamos o mesmo número escolhido acima (numberSelected)
    // e o mesmo array já declarado no arquivo.

    // O método lastIndexOf() funciona quase igual ao indexOf(),
    // mas com uma diferença MUITO importante:
    //   ➜ Ele procura o valor começando do FIM do array para o INÍCIO.
    // Assim, se o número aparecer mais de uma vez, ele retorna
    // a ÚLTIMA posição onde o número foi encontrado.
    // Se não encontrar, retorna -1.
    let findLastPositionNumber = array.lastIndexOf(numberSelected)

    // Novamente verificamos se o valor retornado é diferente de -1.
    // Isso indica que o número foi encontrado em alguma posição.
    if (findLastPositionNumber != -1) {

        // Exibe a última posição onde o número aparece no array.
        console.log(`Última ocorrência do número ${numberSelected} está na ${findLastPositionNumber}ª posição.`)
    }

    // Caso o lastIndexOf() retorne -1, o número não existe em nenhuma posição.
    else {
        console.log(`O número ${numberSelected} não aparece nenhuma vez ao procurar de trás para frente.`)
    }
}

// array.includes()
{
    // O método includes() verifica se um valor existe dentro do array.
    // Ele retorna APENAS:
    //   - true  → se o valor estiver presente
    //   - false → se o valor NÃO estiver presente
    //
    // Diferente do indexOf() e lastIndexOf(), o includes()
    // NÃO informa a posição — apenas diz se o valor existe ou não.
    let checkNumberExists = array.includes(numberSelected)

    // Aqui verificamos se o resultado é true.
    // Isso significa que o número aparece em pelo menos uma posição do array.
    if (checkNumberExists) {

        console.log(`O número ${numberSelected} está presente no array.`)
    }

    // Caso contrário, se o includes() retornar false,
    // o número não existe em nenhuma posição do array.
    else {

        console.log(`O número ${numberSelected} NÃO está presente no array.`)
    }
}

// array.findIndex()
{
    // O método findIndex() procura o PRIMEIRO item do array
    // que satisfaça uma condição (função de teste).
    //
    // Diferente do indexOf(), que procura um valor exato,
    // o findIndex() permite criar uma lógica personalizada.
    //
    // Ele retorna:
    //   - o **índice** (posição) do primeiro elemento que passou no teste
    //   - ou -1 se NENHUM elemento atender à condição.
    //
    // Aqui vamos procurar a posição do numberSelected dentro do array,
    // mas usando uma função de teste (callback).
    let findIndexNumber = array.findIndex(function (item) {

        // Esta função é chamada para cada elemento do array.
        // Retornamos true quando o item for igual ao número procurado.
        return item === numberSelected
    })

    // Verificamos se o método retornou uma posição válida.
    if (findIndexNumber != -1) {

        console.log(`findIndex() encontrou ${numberSelected} na ${findIndexNumber}ª posição.`)
    }

    // Caso retorne -1, nenhum item do array passou no teste.
    else {

        console.log(`findIndex() não encontrou o número ${numberSelected} em nenhuma posição.`)
    }
}

// array.find()
{
    // O método find() procura dentro do array o PRIMEIRO elemento
    // que satisfaça uma condição (função de teste), assim como o findIndex().
    //
    // A diferença é:
    //   ➜ find() retorna o VALOR encontrado
    //   ➜ findIndex() retorna a POSIÇÃO do valor
    //
    // Se nenhum item passar no teste, find() retorna undefined.
    //
    // Aqui vamos procurar o próprio numberSelected no array,
    // usando uma função de teste (callback).
    let foundNumber = array.find(function (item) {

        // Esta função é executada para cada número do array.
        // Quando retornarmos true, o find() para a busca
        // e devolve esse item.
        return item === numberSelected
    })

    // Verificamos se algum número foi encontrado.
    // Se for diferente de undefined, significa que existe pelo menos um.
    if (foundNumber !== undefined) {

        console.log(`find() encontrou o número: ${foundNumber}.`)
    }

    // Caso contrário, o número não aparece no array.
    else {

        console.log(`find() não encontrou o número ${numberSelected} no array.`)
    }
}

