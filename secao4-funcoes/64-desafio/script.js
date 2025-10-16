console.log(calcularMedia("2", "6"))


function calcularMedia() {

    if (arguments.length === 0) {
        return 0
    }

    let sum = 0
    for (let i in arguments) {
        if (typeof arguments[i] != "number") {
            throw "Error"
        }

        sum += arguments[i]
    }

    let media = sum / arguments.length

    return media
}