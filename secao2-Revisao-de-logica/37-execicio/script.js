const output = document.querySelector("#output")
const input = document.querySelector("#input")

function mostrarTabuada() {
    // output.innerHTML = "Valor qualquer <br> pula linha"
    // pedir para o usuário digitar um número
    let num = Number.parseInt(input.value)

    const table = document.createElement("table")
    output.appendChild(table)
    let linha = document.createElement("tr")
    let html = ""
    // mostrar a tabuada desse número de 1 a 1000
    for (let i = 0; i <= 1000; i++) {
        let result = num * i

        html += `${num} x ${i} = ${result}<br>`
    }
    linha.innerHTML = html
    // Toda informação que vem da interface do usuário  é string
    table.appendChild(linha)
}

function limparTabuada() {
    output.innerHTML = ""
}