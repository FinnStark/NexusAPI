import 'reflect-metadata';
import express from 'express';
import {userRoutes} from './interface/routes/userRoutes';
import config from './api.config'
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swaggerConfig";

const app = express();


app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(config.PORT, () => {
    console.log(`Listening at http://localhost:${config.PORT}`);
    console.log(`Swagger http://localhost:${config.PORT}/api-docs`);
});
server.on('error', console.error)