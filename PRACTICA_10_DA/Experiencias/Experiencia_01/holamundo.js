// Importar la librería http
var http = require('http');

// Crear el servidor
var server = http.createServer();

// Creación de mensaje de respuesta cuando se reciba una solicitud
function mensaje(petic, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
}

// Asignando mensaje de respuesta al servidor
server.on('request', mensaje);

// Levantando el servidor en el puerto 3000 y configurando mensaje de confirmación
server.listen(4000, function() {
    console.log('La Aplicación está funcionando en el puerto 4000');
});
