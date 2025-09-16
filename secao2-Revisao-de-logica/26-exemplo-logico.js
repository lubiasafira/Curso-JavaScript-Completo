// Guardamos a idade da pessoa
let idade = 18

// Verificamos se os pais estão presentes
// true = estão presentes | false = não estão
let paisPresentes = false

// Verificamos se a pessoa já comprou o bilhete
// true = comprou | false = não comprou
let comprouBilhete = false

/* 
  Regra para poder viajar:
  - A pessoa precisa ser maior de 18 anos OU estar com os pais
  - E, além disso, precisa ter comprado o bilhete
*/
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

// Mostramos no console se a pessoa pode viajar ou não
console.log(`Pode viajar? ${podeViajar}`)
