const express = require('express');
const app = express();
const port = 8000;

// Middleware para establecer el código de estado 200 en todas las respuestas
app.use((req, res, next) => {
  res.status(200);
  next();
});

// Ruta raíz ('/') para devolver un objeto JSON con valores aleatorios
app.get('/', (req, res) => {
    const aleatorio1 = Math.floor(Math.random() * 1000) + 1;
    const aleatorio2 = Math.floor(Math.random() * 1000) + 1;
    res.json({ numero1: aleatorio1, numero2: aleatorio2 });
});

// Ruta personalizada ('/info') para devolver un objeto JSON
app.get('/info', (req, res) => {
    const info = {
        nombre: "Diego",
        edad: 20,
        ciudad: "Tlaxcala"
    };
    res.json(info);
});

// Ruta POST en la raíz ('/') - texto plano
app.post('/', (req, res) => {
    res.send('Método POST');
});

// Ruta PUT en la raíz ('/') - texto plano
app.put('/', (req, res) => {
    res.send('Método PUT');
});

// Ruta PATCH en la raíz ('/') - texto plano
app.patch('/', (req, res) => {
    res.send('Método PATCH');
});

// Ruta DELETE en la raíz ('/') - texto plano
app.delete('/', (req, res) => {
    res.send('Método DELETE');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
