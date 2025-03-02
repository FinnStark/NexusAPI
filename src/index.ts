import 'reflect-metadata';
import express from 'express';
import {userRoutes} from './interface/routes/userRoutes';
import bodyParser from 'body-parser'
import config from './api.config'
import { setupSwagger } from "./interface/swagger";

const app = express();

// Middleware para manejar datos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Routes
app.use('/users', userRoutes);
setupSwagger(app);

const server = app.listen(config.PORT, () => {
    console.log(`Listening at http://localhost:${config.PORT}`);
    console.log(`Swagger http://localhost:${config.PORT}/api-docs`);
});
server.on('error', console.error)