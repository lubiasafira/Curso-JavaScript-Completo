// Criamos um array com quatro números
const numeros = [10, 20, 30, 40]

// Usamos a desestruturação para extrair cada valor
// O JavaScript lê: "pegue o 1º valor e coloque em a,
// o 2º valor em b, o 3º em c, o 4º em d"
const [a, b, c, d] = numeros

console.log(a, b, c, d)
// Saída: 10 20 30 40



// ------------------------------
// IGNORANDO VALORES DO ARRAY
// ------------------------------

// Aqui pulamos o segundo elemento usando uma vírgula vazia
const [x, , z] = numeros
console.log(x, z)
// Saída: 10 30



// ------------------------------
// PEGA O PRIMEIRO E O RESTO
// ------------------------------

const [primeiro, ...resto] = numeros

console.log(primeiro) // 10
console.log(resto)    // [20, 30, 40]
// O operador ...rest pega "todo o resto" do array


// ------------------------------
// DESSESTRUTURAÇÃO COM VALOR PADRÃO
// ------------------------------

// O array só tem dois valores, mas pedimos três.
// Então o terceiro recebe 100 como valor padrão.
const [n1 = 100, n2 = 100, n3 = 100] = [5, 6]

console.log(n1, n2, n3)
// Saída: 5 6 100



// ------------------------------
// DESSTRUTURANDO RETORNO DE FUNÇÃO
// ------------------------------

function pegarCoordenadas() {
    return [12, 34]  // retorna um array
}

const [lat, lng] = pegarCoordenadas()

console.log(lat, lng)
// Saída: 12 34
