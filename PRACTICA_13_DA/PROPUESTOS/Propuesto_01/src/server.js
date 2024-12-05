const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const serviceAccount = require('../serviceAccountKey.json');

const app = express();
const port = 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-app-id.appspot.com', 
});

const db = admin.firestore();

app.use(bodyParser.json());


app.get('/api/usuarios', (req, res) => {
  db.collection('usuarios').get()
    .then(snapshot => {
      const usuarios = snapshot.docs.map(doc => ({
        id: doc.id,  
        ...doc.data() 
      }));
      res.status(200).json(usuarios);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    });
});


app.post('/api/usuarios', (req, res) => {
  const { nombre, edad, correo } = req.body;
  db.collection('usuarios').add({
    nombre,
    edad,
    correo
  })
    .then(docRef => {
      res.status(201).json({ message: 'Usuario agregado exitosamente' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al agregar usuario', error });
    });
});

app.get('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  db.collection('usuarios').doc(id).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json(doc.data());
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al obtener el usuario', error });
    });
});

app.put('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, edad, correo } = req.body;
  db.collection('usuarios').doc(id).update({
    nombre,
    edad,
    correo
  })
    .then(() => {
      res.status(200).json({ message: 'Usuario actualizado' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al actualizar usuario', error });
    });
});

app.delete('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  db.collection('usuarios').doc(id).delete()
    .then(() => {
      res.status(200).json({ message: 'Usuario eliminado' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error al eliminar usuario', error });
    });
});

app.post('/mascotas', async (req, res) => {
  try {
    const { nombre, raza, peso } = req.body;
    if (!nombre || !raza || !peso) {
      return res.status(400).send('Todos los campos (nombre, raza, peso) son obligatorios.');
    }

    const newMascota = { nombre, raza, peso };
    const docRef = await db.collection('mascotas').add(newMascota);
    res.status(201).send({ id: docRef.id, ...newMascota });
  } catch (error) {
    console.error('Error añadiendo mascota:', error);
    res.status(500).send('Error añadiendo la mascota.');
  }
});

app.get('/mascotas', async (req, res) => {
  try {
    const mascotasRef = db.collection('mascotas');
    const snapshot = await mascotasRef.get();
    if (snapshot.empty) {
      return res.status(404).send('No se encontraron mascotas.');
    }

    const mascotas = [];
    snapshot.forEach(doc => {
      mascotas.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(mascotas);
  } catch (error) {
    console.error('Error obteniendo mascotas:', error);
    res.status(500).send('Error obteniendo las mascotas.');
  }
});

app.delete('/mascotas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = db.collection('mascotas').doc(id);
    await docRef.delete();
    res.status(200).send(`Mascota con ID ${id} eliminada.`);
  } catch (error) {
    console.error('Error eliminando mascota:', error);
    res.status(500).send('Error eliminando la mascota.');
  }
});

app.put('/mascotas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, raza, peso } = req.body;
    if (!nombre || !raza || !peso) {
      return res.status(400).send('Todos los campos (nombre, raza, peso) son obligatorios.');
    }

    const docRef = db.collection('mascotas').doc(id);
    await docRef.update({ nombre, raza, peso });
    res.status(200).send(`Mascota con ID ${id} actualizada.`);
  } catch (error) {
    console.error('Error actualizando mascota:', error);
    res.status(500).send('Error actualizando la mascota.');
  }
});

app.listen(port, () => {
  console.log(`Servidor API en http://localhost:${port}`);
});
