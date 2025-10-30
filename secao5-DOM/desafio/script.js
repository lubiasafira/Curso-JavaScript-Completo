let checkboxAceite = document.querySelector("#aceite")
let btnCadastrar = document.querySelector("#cadastrar")

function aceitarContrato() {
    if (!checkboxAceite.checked) {
        btnCadastrar.disabled = true
    } else {
        btnCadastrar.disabled = false
    }
}