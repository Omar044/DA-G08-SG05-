const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',  
  user: 'root',       
  password: '0000',       
  database: 'veterinaria'  
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = connection;
