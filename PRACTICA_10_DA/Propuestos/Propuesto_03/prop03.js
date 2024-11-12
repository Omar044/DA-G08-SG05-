var http = require('http');
var fs = require('fs');
var url = require('url');

// Lista para almacenar los jugadores
var jugadores = [];

// Leer archivo HTML
var html = fs.readFileSync('./index.html');

// Crear servidor para manejar las solicitudes
http.createServer(function(req, res) {
    var path = url.parse(req.url, true);
    
    // Si es una solicitud GET para mostrar la página principal
    if (path.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    }
    // Si es una solicitud POST para agregar un jugador
    else if (path.pathname === '/agregar' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            let params = new URLSearchParams(body);
            let nombre = params.get('nombre');
            let edad = params.get('edad');
            let equipo = params.get('equipo');
            
            // Agregar jugador a la lista
            jugadores.push({ nombre: nombre, edad:edad,equipo: equipo });

            res.writeHead(302, { 'Location': '/' }); // Redirigir de vuelta al formulario
            res.end();
        });
    }
    // Si se pide la lista de jugadores
    else if (path.pathname === '/jugadores' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(jugadores));
    }
}).listen(3000, function() {
    console.log("Servidor corriendo en http://localhost:3000");
});
