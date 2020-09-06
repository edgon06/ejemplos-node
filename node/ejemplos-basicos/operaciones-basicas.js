
objeto = {}
objeto.sumar = sumar
objeto.restar = restar
objeto.multiplicar = multiplicar
objeto.dividir = dividir

// retornar el objeto "objeto" si este modulo es pasado como
// parametro en algun llamado a la funcion require();
module.exports = objeto

function sumar(num1, num2)
{
    return num1 + num2
}

function restar(num1, num2)
{
    return num1 - num2
}

function multiplicar(num1, num2)
{
    return num1 * num2
}

function dividir(num1, num2)
{
    if(num2 !== 0)
        return num1 / num2
    else
        console.log("Divisor no puede ser 0")    
}