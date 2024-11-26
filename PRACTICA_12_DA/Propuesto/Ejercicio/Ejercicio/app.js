const express = require('express');
const mongoose = require('mongoose');
const Producto = require('./producto'); 

const app = express();

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tienda')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error de conexión a MongoDB:', err));

// Endpoint GET
app.get('/productos', async (req, res) => {
    try {
      const productos = await Producto.find(); 
      res.status(200).json(productos); 
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  });

// Endpoint PUT 
app.put('/productos/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, precio } = req.body;

  try {
    const producto = await Producto.findByIdAndUpdate(id, { nombre, descripcion, categoria, precio }, { new: true });
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).send('Error al actualizar el producto');
  }
});

// Endpoint DELETE 
app.delete('/productos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByIdAndDelete(id);
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.status(200).send('Producto eliminado');
  } catch (err) {
    res.status(500).send('Error al eliminar el producto');
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
