// =======================================================
// Demonstração didática dos métodos: 
// push, pop, shift, unshift, slice e splice
// =======================================================

// Começamos com um array básico
let array = ["a", "b", "c", "d", "f"]
console.log("Array inicial:", array)


// =======================================================
// 1. PUSH — adiciona elemento no FINAL do array
// =======================================================
{
    console.log("\n====== array.push('g'): ======")

    // push retorna o novo tamanho do array
    let novoTamanho = array.push("g")

    console.log(`Novo tamanho: ${novoTamanho}`)
    console.log("Array agora:", array)
    console.log("=================================")
}


// =======================================================
// 2. POP — remove o último elemento
// =======================================================
{
    console.log("\n====== array.pop(): ======")

    // pop retorna o elemento removido
    let removido = array.pop()

    console.log(`Elemento removido: ${removido}`)
    console.log("Array agora:", array)
    console.log("=================================")
}


// =======================================================
// 3. SHIFT — remove o primeiro elemento
// =======================================================
{
    console.log("\n====== array.shift(): ======")

    // shift retorna o elemento removido (o primeiro)
    let removido = array.shift()

    console.log(`Elemento removido (primeiro): ${removido}`)
    console.log("Array agora:", array)
    console.log("=================================")
}


// =======================================================
// 4. UNSHIFT — adiciona elemento(s) no COMEÇO do array
// =======================================================
{
    console.log("\n====== array.unshift(2): ======")

    // unshift retorna o novo tamanho do array
    let novoTamanho = array.unshift(2)

    console.log(`Novo tamanho: ${novoTamanho}`)
    console.log("Array agora:", array)
    console.log("=================================")
}


// =======================================================
// 5. SLICE — copia parte do array (não altera o original)
// slice(inicio, fim) -> pega do índice 'inicio' até 'fim-1'
// =======================================================
{
    console.log("\n====== array.slice(1, 3): ======")

    let novoArray = array.slice(1, 3)

    console.log("Array original:", array) // não muda!
    console.log("Novo array criado com slice:", novoArray)
    console.log("=================================")
}


// =======================================================
// 6. SPLICE — remove e/ou adiciona elementos
// splice(inicio, qtdRemover, itensParaAdicionar...)
// Ele ALTERA o array original
// =======================================================
{
    console.log("\n====== array.splice(2, 1, 999): ======")

    /*
        Aqui:
        - começa no índice 2
        - remove 1 elemento
        - adiciona 999 no lugar
    */
    let removidos = array.splice(2, 1, 999)

    console.log("Elemento(s) removido(s):", removidos)
    console.log("Array modificado:", array)
    console.log("=================================")
}


// =======================================================
// FIM
// =======================================================
console.log("\n====== Final do código ======")
console.log("Estado final do array:", array)
