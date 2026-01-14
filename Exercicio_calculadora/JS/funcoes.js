function calcular(operacao) {
    const num1 = document.getElementById('n1').value
    const num2 = document.getElementById('n2').value

    let result

    switch (operacao) {
        case "+": result = somar(num1, num2);break;

        case "-": result = subtrair(num1, num2);break;

        case "*": result = multiplicar(num1, num2);break;

        case "/": result = dividir(num1, num2);break;
    }

    document.getElementById('resultado').innerHTML = "O resultado é = " + result

}


function somar(n1, n2) {
    return Number(n1) + Number(n2)
}

function multiplicar(n1, n2) {
    return Number(n1) * Number(n2)
}

function subtrair(n1, n2) {
    return Number(n1) - Number(n2)
}

function dividir(n1, n2) {
    if (n2 == 0) {
        console.error("Não é possível dividir um número por zero")
        return null
    }
    else {
        return Number(n1) / Number(n2)
    }
}