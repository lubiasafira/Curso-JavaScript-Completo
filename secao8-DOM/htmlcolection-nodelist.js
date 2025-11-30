// Diferença de NodeList e HTMLCollection

const nodeList = document.querySelectorAll("#list li")
const htmlCollection = document.getElementById("list").getElementsByTagName("li")

const view = document.querySelector("#view")

// Adicionando novo item
document.querySelector("#list").innerHTML += "<li>item 6 (adicionado depois)</li>"

// Criando HTML para mostrar os resultados
let html = ""

html += `<h2>NodeList (estática)</h2>`
html += `<p>Total de itens: ${nodeList.length}</p>`
html += `<ul>`
nodeList.forEach((el) => {
    html += `<li>${el.textContent}</li>`
})
html += `</ul>`


html += `<h2>HTMLCollection (viva)</h2>`
html += `<p>Total de itens: ${htmlCollection.length}</p>`
html += `<ul>`
Array.from(htmlCollection).forEach((el) => {
    html += `<li>${el.textContent}</li>`
})
html += `</ul>`

// Colocando tudo na tela
view.innerHTML = html
