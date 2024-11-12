const http = require('http');

const equipos = [
  { id: 1, nombre: 'FC Melgar', ciudad: 'Arequipa', pais: 'Peru' },
  { id: 2, nombre: 'Universitario', ciudad: 'Lima', pais: 'Peru' },
  { id: 3, nombre: 'Manchester City', ciudad: 'Manchester', pais: 'Inglaterra' },
  { id: 4, nombre: 'River Plate', ciudad: 'Buenos Aires', pais: 'Argentina' },
];

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  const url = req.url;

  if (url === '/equipos') {
    res.writeHead(200);
    res.end(equipos.map(e => `${e.nombre} - ${e.ciudad}, ${e.pais}`).join('\n'));
  } else if (url.startsWith('/equipo/')) {
    const equipo = equipos.find(e => e.id === parseInt(url.split('/')[2]));
    res.writeHead(equipo ? 200 : 404);
    res.end(equipo ? `${equipo.nombre} - ${equipo.ciudad}, ${equipo.pais}` : 'Equipo no encontrado');
  } else {
    res.writeHead(404);
    res.end('Ruta no encontrada');
  }
}).listen(8080, function () {
  console.log('Servidor corriendo en http://localhost:8080');
});
