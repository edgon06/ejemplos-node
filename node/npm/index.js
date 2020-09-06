// Modulo para hacer un servidor http
const http = require('http')

const colors = require('colors')

const action = function(request, response){
    response.writeHead(200, {'content-type':'text/html'})
    response.write('<h1>Hola Mundo</h1>')
    response.end()
}

const server = http.createServer(action)

server.listen(3000, function ()
{
    console.log('Server on port 3000'.yellow)
})
