// Aqui declaramos duas variáveis:
// n1 é do tipo number
let n1 = 10
// n2 é do tipo string, mesmo que o conteúdo seja "10"
let n2 = "10"

// O operador typeof retorna o tipo da variável
let n1Tipo = typeof n1
let n2Tipo = typeof n2

console.log(`Tipo de n1: ${n1Tipo}`) // number
console.log(`Tipo de n2: ${n2Tipo}`) // string


// Quando usamos o operador * (multiplicação),
// o JavaScript faz uma "conversão implícita" de string para number.
console.log("n1 * n2: " + n1 * n2) // 10 * "10" → 100


// Já o operador + pode ter dois significados:
// - Se ambos forem números → soma.
// - Se um for string → concatenação.
// Aqui, como n2 é string, ocorre concatenação.
console.log("n1 + n2 (string): " + n1 + n2) // "10" + "10" → "1010"


// Conversão explícita:
// Podemos transformar n2 (string) em number
// usando Number.parseInt, parseFloat ou Number()
let n2Number = Number.parseInt(n2)

// Agora sim, temos uma soma numérica real
console.log(`n1 + n2 (number): ${n1 + n2Number}`) // 10 + 10 → 20


// Resumindo:
// - Para converter de string → number:
//   Number.parseInt(), Number.parseFloat(), Number()
// - Para converter de number → string:
//   n1.toString(), String(n1)
