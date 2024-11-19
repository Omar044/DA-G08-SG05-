const express = require('express');
const appRouter = express.Router();
const connection = require('../config/connection');
const bodyParser = require('body-parser');

// Configuración de body parser
appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());

// Procedimiento almacenado para listar libros
let sql_all = `CALL usp_listar_books()`;

// Procedimiento almacenado para insertar libro
let sql_insert = `CALL usp_insertar_libro(?, ?, ?)`;

// Endpoint para listar libros
appRouter.get('/books', (req, res) => {
    connection.query(sql_all, (err, results) => {
        if (err) {
            console.error('Error al listar libros:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results[0]);
    });
});

// Endpoint para insertar un libro
appRouter.post('/books', (req, res) => {
    const book = {
        title: req.body.book_title,
        author: req.body.book_author,
        published: req.body.book_published
    };

    // Verificar que los datos estén presentes
    if (!book.title || !book.author || !book.published) {
        return res.status(400).send('Faltan datos en la solicitud');
    }

    connection.query(sql_insert, [book.title, book.author, book.published], (err, results) => {
        if (err) {
            console.error('Error al insertar libro:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        console.log('Resultado de la inserción:', results);
        res.send('Libro insertado exitosamente');
    });
});appRouter.post('/books', (req, res) => {
    console.log(req.body);  // Esto mostrará los datos recibidos
    const book = {
        title: req.body.book_title,
        author: req.body.book_author,
        published: req.body.book_published
    };
    connection.query(sql_insert, [book.title, book.author, book.published], (err, results) => {
        if (err) {
            console.error('Error al insertar libro:', err);  // Esto muestra el error en la consola del servidor
            res.status(500).send('Error en el servidor');
            return;
        }
        res.send('Libro insertado exitosamente');
    });
});


module.exports = appRouter;
