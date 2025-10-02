const output = document.querySelector("#output")
const input = document.querySelector("#input")
const table = document.createElement("table")

function mostrarTabuada() {
    limparTabuada()
    // output.innerHTML = "Valor qualquer <br> pula linha"
    // pedir para o usuário digitar um número
    let num = Number.parseInt(input.value)

    output.appendChild(table)
    let html = ""
    // mostrar a tabuada desse número de 1 a 1000
    for (let i = 0; i <= 1000; i++) {
        let result = num * i

        html += `<tr><td>${num} x ${i} = ${result}</td></tr>`
    }
    table.innerHTML = html
    // Toda informação que vem da interface do usuário  é string
}

function limparTabuada() {
    output.innerHTML = ""
}