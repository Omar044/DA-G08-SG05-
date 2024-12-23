const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

function verifiToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log('Token recibido:', bearerToken);  
        next();
    } else {
        console.log('No se recibió el token');
        res.sendStatus(403); 
    }
}

app.get('/api', (req, res) => {
    res.json({
        mensaje: "Esta es la Data de Clientes"
    });
});

app.post('/api/posts', verifiToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                mensaje: 'Post Creado',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: "aruiz",
        email: "aruiz@gmail.com"
    };

    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        if (err) {
            res.status(500).json({ error: 'Error al generar el token' });
        } else {
            res.json({
                token
            });
        }
    });
});

app.listen(5000, () => {
    console.log("Servidor está ejecutándose en el puerto 5000");
});
