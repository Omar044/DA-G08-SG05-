const express = require('express');
const router = express.Router();
const connection = require('../config/connection');

// Obtener todas las mascotas
router.get('/', (req, res) => {
  connection.query('CALL ObtenerTodasMascotas()', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
    res.json(results[0]);
  });
});

// Crear una nueva mascota
router.post('/', (req, res) => {
  const { nombre, especie, raza, propietario, edad } = req.body;
  connection.query(
    'CALL InsertarMascota(?, ?, ?, ?, ?)',
    [nombre, especie, raza, propietario, edad],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al insertar la mascota' });
      }
      res.status(201).json({ message: 'Mascota creada exitosamente' });
    }
  );
});

// Actualizar una mascota
router.put('/:id', (req, res) => {
  const { nombre, especie, raza, propietario, edad } = req.body;
  const mascotaId = req.params.id;
  connection.query(
    'CALL ActualizarMascota(?, ?, ?, ?, ?, ?)',
    [mascotaId, nombre, especie, raza, propietario, edad],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al actualizar la mascota' });
      }
      res.json({ message: 'Mascota actualizada exitosamente' });
    }
  );
});

// Eliminar una mascota
router.delete('/:id', (req, res) => {
  const mascotaId = req.params.id;
  connection.query('CALL EliminarMascota(?)', [mascotaId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
    res.json({ message: 'Mascota eliminada exitosamente' });
  });
});

module.exports = router;
