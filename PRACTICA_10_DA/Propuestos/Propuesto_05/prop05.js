
var express = require('express');
var app = express();

var rutas = require('./rutas.js');

app.use('/', rutas);

app.listen(3000, function() {
  console.log('La aplicación de fútbol está funcionando en el puerto 3000');
});
