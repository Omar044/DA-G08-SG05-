const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const booksRoutes = require('./routes/books');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/api', booksRoutes);  // Asegúrate de que Postman esté enviando solicitudes a http://localhost:3000/api/books

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

