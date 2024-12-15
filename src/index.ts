import 'reflect-metadata';
import express from 'express';
import userRouter from './routes/userRoutes';

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
const PORT = process.env.PORT_DEV || 3000;

// Middleware para manejar datos JSON
app.use(express.json());

// Integrar Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Rutas de los ítems
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});