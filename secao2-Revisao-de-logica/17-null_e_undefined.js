// Quando declaramos uma variável sem atribuir valor,
// ela recebe automaticamente o valor "undefined".
let valorIndefinido

// Aqui, imprimimos o valor da variável (undefined)
console.log(`O valor da variável é: ${valorIndefinido}`)

// O typeof em uma variável "undefined" retorna "undefined"
console.log(`O tipo da variável é: ${typeof valorIndefinido}`)


// Já o "null" é um valor atribuído manualmente.
// Ele representa a ausência intencional de um valor.
let valorNulo = null

// Imprimindo o valor da variável (null)
console.log(`O valor da variável é: ${valorNulo}`)

// Curiosidade: typeof em "null" retorna "object".
// Isso é considerado um bug histórico do JavaScript,
// mas foi mantido por compatibilidade.
console.log(`O tipo da variável é: ${typeof valorNulo}`)
