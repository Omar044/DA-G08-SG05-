const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let jugadores = [
    { id: 1, nombre: 'Lionel Messi', equipo: 'PSG', edad: 35 },
    { id: 2, nombre: 'Cristiano Ronaldo', equipo: 'Al Nassr', edad: 39 }
];

app.get('/jugadores', (req, res) => {
    res.json(jugadores);
});

app.post('/jugadores', (req, res) => {
    const { nombre, equipo, edad } = req.body;
    const nuevoJugador = {
        id: jugadores.length + 1,
        nombre,
        equipo,
        edad
    };
    jugadores.push(nuevoJugador);
    res.status(201).json(nuevoJugador);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
