var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306', 
    database: 'futbolDB', 
    user: 'root', 
});

conexion.connect(function(err){
    if(err){
        console.log("Error de conexión: " + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});

var jugadores = [
    { nombre: 'Iñaqui', edad: 37, equipo_id: 1 },
    { nombre: 'Karim Benzema', edad: 36, equipo_id: 2 },
    { nombre: 'Marcus Rashford', edad: 26, equipo_id: 3 },
];

jugadores.forEach(jugador => {
    const query = `INSERT INTO jugadores (nombre, edad, equipo_id) VALUES ('${jugador.nombre}', ${jugador.edad}, ${jugador.equipo_id})`;
    conexion.query(query, function(error, results) {
        if (error) throw error;
        console.log(`Jugador ${jugador.nombre} agregado.`);
    });
});

conexion.query('SELECT jugadores.nombre AS jugador, jugadores.edad, equipos.nombre AS equipo FROM jugadores JOIN equipos ON jugadores.equipo_id = equipos.id', function(error, results){
    if(error) throw error;
    console.log("\nLista de jugadores y sus equipos:");
    results.forEach(element => {
        console.log(`${element.jugador} (${element.edad} años) - Equipo: ${element.equipo}`);
    });
});

conexion.end();
