// Modulo para hacer un servidor http
const http = require('http')

// Metodo para crear un servidor http
http.createServer(function(request, response){
    // Especificar que tipo de respuesta dara el servidor (en este caso, un codigo 200 y un texto html)
    response.writeHead(200, {'content-type':'text/html'})
    // Escribir en la pantalla
    response.write('<h1>Hola mundo</h1>')
    // Terminar respuesta
    response.end()
}).listen(3000, function ()
{
    console.log('Server on port 3000')
}) // Metodo listen sirve para indicar el numero de puerto que debe escuchar


/* 
forma alternativa mas ordenada:

const action = function(request, response){
    response.writeHead(200, {'content-type':'text/html'})
    response.write('<h1>Hola Mundo</h1>')
    response.end()
}

const server = http.createServer(action)

server.listen(3000, function ()
{
    console.log('Server on port 3000')
})
*/