const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Configurar dotenv para leer el archivo .env
dotenv.config();

const app = express();
const port = 3000;

// Middleware para parsear JSON en el body de las solicitudes
app.use(express.json());

// Clave secreta del archivo .env
const secretKey = process.env.SECRET_KEY;

// Función para generar un JWT
const generarToken = (username) => {
  const payload = { username };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });  // El token expira en 1 hora
};

// Middleware para verificar el JWT
const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(403).json({ mensaje: 'Acceso denegado' });

  // El token debe ser 'Bearer <token>', así que lo extraemos
  const bearerToken = token.split(' ')[1];
  jwt.verify(bearerToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensaje: 'Token inválido o expirado' });
    }
    req.user = decoded;  // Almacenamos la información del token en la request
    next();  // Llamamos a la siguiente función en el ciclo de la solicitud
  });
};

// Endpoint de login, genera un JWT cuando las credenciales son correctas
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password123") {
    const token = generarToken(username);
    return res.json({ mensaje: 'Login exitoso', token });
  } else {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

// Endpoint protegido, requiere un JWT válido
app.get('/protegido', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso al recurso protegido', usuario: req.user });
});

// Endpoint de perfil, requiere un JWT válido
app.get('/perfil', verificarToken, (req, res) => {
  res.json({ mensaje: 'Perfil de usuario', usuario: req.user });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
