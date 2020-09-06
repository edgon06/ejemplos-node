// Asignar al objeto "operaciones" el objeto devuelto por el modulo operaciones-basicas.js
// const operaciones = require('./operaciones-basicas.js')

// console.log(operaciones)

// console.log(operaciones.dividir(1,3))
// console.log(operaciones.sumar(1,3))
// console.log(operaciones.restar(1,3))
// console.log(operaciones.multiplicar(1,3))



// Modulo para interacctuar con las propiedades del sistema operativo
const os = require('os')

console.log(os.platform())
console.log(os.release())
console.log(os.freemem())
console.log(os.totalmem())

// Modulo para interactuar con el sistema de archivos del SO
const fs = require('fs')

// Parametros: Direccion, contenido, funcion de Callback
fs.writeFile('./texto.txt','linea uno en el archivo de texto',(error)=>{
    if(error)
    {
        console.log(error)
    }
    //console.log('Archivo creado con exito.')
})

// Para verificar el funcionamiento de un codigo asincrono como el anterior:
//console.log('Ultima linea de codigo')

fs.readFile('./texto.txt', function(error, datos){
    if(error)
    {
        console.log(error)
    }
    // datos.toString() retorna los datos como texto (de lo contrario devolvera datos crudos)
    console.log(datos.toString())
})