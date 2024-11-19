const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mascotasRoutes = require('./routes/mascotas');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/mascotas', mascotasRoutes);

// Puerto y ejecución del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
