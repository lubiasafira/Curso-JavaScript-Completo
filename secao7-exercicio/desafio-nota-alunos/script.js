const table = document.querySelector(".striped")

const headersTable = table.querySelector("thead").querySelector("tr").querySelectorAll("th")

const dadosAlunos = table.querySelector("tbody").querySelectorAll("tr")

const alunos = []

for (let i = 0; i < dadosAlunos.length; i++) {
    const Aluno = {}
    for (let j = 0; j < headersTable.length; j++) {
        let dado = dadosAlunos[i].querySelectorAll("td")[j]
        let prop = headersTable[j].textContent
        Aluno[`${prop}`] = dado.textContent
    }

    alunos.push(Aluno)
}


// calcular média dos alunos


for (let i = 0; i < alunos.length; i++) {
    let alunoAtual = alunos[i]
    let notas = []

    for (let prop in alunoAtual) {
        if (prop === "Nome" || prop === "Média") {
            continue
        }
        notas.push(Number.parseFloat(alunoAtual[prop]))
    }

    alunoAtual.Média = avarege(...notas)
}

// imprimir dados dos Alunos
for (let i = 0; i < dadosAlunos.length; i++) {
    let dadosHtml = dadosAlunos[i].querySelectorAll("td")
    let médiaHtml = dadosHtml[dadosHtml.length - 1]

    médiaHtml.innerText = alunos[i]["Média"]
}
