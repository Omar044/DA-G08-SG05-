const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Cambia si usas otro host
    user: 'root',      // Cambia con tu usuario
    password: 'omar',  // Cambia con tu contraseña
    database: 'biblioteca'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

module.exports = connection;
