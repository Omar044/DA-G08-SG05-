var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('FUTBOL WEB/OMAR');
});

router.get('/ligas', function(req, res) {
  res.send('Listado de ligas de fútbol actuales: La Liga, Premier League, Serie A, Bundesliga, Ligue 1');
});

router.get('/equipos', function(req, res) {
  res.send('Equipos destacados: FC Barcelona, Real Madrid, Manchester City, Bayern Munich, PSG');
});

router.get('/jugadores', function(req, res) {
  res.send('Jugadores más destacados: Lionel Messi, Cristiano Ronaldo, Kylian Mbappé, Erling Haaland');
});

router.get('/equipo/:nombre', function(req, res) {
  var nombre = req.params.nombre;
  if (nombre.toLowerCase() === 'barcelona') {
    res.send('El FC Barcelona está en La Liga, el equipo tiene a jugadores como Robert Lewandowski y Pedri.');
  } else if (nombre.toLowerCase() === 'real madrid') {
    res.send('El Real Madrid está en La Liga, cuenta con jugadores como Rodrigo Goes y Vinícius Júnior.');
  } else {
    res.send('Equipo no encontrado');
  }
});

router.get('/jugador/:nombre', function(req, res) {
  var nombre = req.params.nombre;
  if (nombre.toLowerCase() === 'messi') {
    res.send('Lionel Messi es un jugador argentino, considerado uno de los mejores futbolistas del mundo. Actualmente juega en el Inter Miami.');
  } else if (nombre.toLowerCase() === 'ronaldo') {
    res.send('Cristiano Ronaldo es un jugador portugués, conocido por su habilidad goleadora, actualmente juega en el Al Nassr FC.');
  } else {
    res.send('Jugador no encontrado');
  }
});

module.exports = router;
