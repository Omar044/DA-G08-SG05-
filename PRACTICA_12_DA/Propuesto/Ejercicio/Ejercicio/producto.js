const mongoose = require('mongoose');

// Definir un esquema para los productos
const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  precio: Number
});

// Crear un modelo basado en el esquema
const Producto = mongoose.model('Producto', productoSchema);

// Exportar el modelo
module.exports = Producto;
