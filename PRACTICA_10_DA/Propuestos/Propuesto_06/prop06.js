var express = require('express');
var app = express();

const middleware = function(req, res, next) {
  console.log(`Solicitud recibida para: ${req.originalUrl}`);
  next(); 
};

app.use(middleware);

app.get('/', function(req, res) {
  res.send('Bienvenido a la tiendita OMARELLA');
});

app.get('/hardware', function(req, res) {
  res.send('Componentes disponibles: Mouse, Teclado, Monitor, Impresora, Auriculares');
});

app.get('/hardware/:componente', function(req, res) {
  var componente = req.params.componente.toLowerCase();
  if (componente === 'mouse') {
    res.send('Mouses disponibles: Logitech G Pro, Razer DeathAdder');
  } else if (componente === 'teclado') {
    res.send('Teclados disponibles: Corsair K95, Razer BlackWidow');
  } else if (componente === 'monitor') {
    res.send('Monitores disponibles: Dell UltraSharp, LG 27GN950');
  } else if (componente === 'impresora') {
    res.send('Impresoras disponibles: HP LaserJet, Canon PIXMA');
  } else if (componente === 'auriculares') {
    res.send('Auriculares disponibles: Bose QuietComfort, Sony WH-1000XM4');
  } else {
    res.send('Componente no encontrado');
  }
});

app.listen(3000, function() {
  console.log('Servidor de hardware en escucha en el puerto 3000');
});
