// Utilizar framework express
const express = require('express')

// Crear un servidor http
const server = express()

// Cuando se solicite (primer parametro), responder la funcion (segundo parametro)
server.get('/', (request, response)=>{
    // Enviar respuesta
    response.send('<h1>Hola Mundo con Express</h1>')
    response.end()
})

// Servidor escucha en el puerto (primer parametro) y tras esto ejecutar la funcion de callback (segundo parametro)
server.listen(3000, ()=>{
    console.log('server on port 3000')
})
