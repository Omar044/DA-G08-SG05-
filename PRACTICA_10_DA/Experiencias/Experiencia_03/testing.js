// Solicitando paquete de Mysql
var mysql = require('mysql');
// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
    host:'localhost',
    port:'3306',
    database: 'musicdb',
    user: 'root',
    password: '0000',
});
// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err){
    if(err){
        console.log("Error de conexion"+ err.stack);
        return;
    }
    console.log("Conectado al ID "+conexion.threadId);
});
conexion.query('select * from albums', function(error,results){
    if(error)
        throw error;
    results.forEach(element => {
        console.log(element);
    });
});
conexion.end();