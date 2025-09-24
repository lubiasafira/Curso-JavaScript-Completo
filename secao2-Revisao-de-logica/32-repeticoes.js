// pede um número

let n = 0;

do {
    n = prompt("Digite: um número inteiro")
    n = Number.parseInt(n)
}
while (isNaN(n))

for (let i = 0; i < 11; i++) {
    let tabuadaId = document.querySelector(`#tabuada`)

    let linha = document.createElement("tr")
    tabuadaId.appendChild(linha)

    let td = document.createElement("td")

    td.innerHTML += `${n} x ${i} = ${n * i}`

    linha.appendChild(td)

}