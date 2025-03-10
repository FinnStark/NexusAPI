import 'reflect-metadata';
import "../config/env"; 
import express from 'express';
import { connectDB } from "./infrastructure/database/mongodb"; // 🚀 Connexion MongoDB
import {userRoutes} from './interface/routes/userRoutes';
import config from './api.config'
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swaggerConfig";
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from "./infrastructure/logger/logger";

const app = express();

app.use(express.json());

// Connexion à la BDD
connectDB();

// Routes
app.use('/users', userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

const server = app.listen(config.PORT, () => {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    logger.info(`Server is running on port ${config.PORT}`);
    console.log(`Listening at http://localhost:${config.PORT}`);
    console.log(`Swagger http://localhost:${config.PORT}/api-docs`);
    console.log(`Hello ${process.env.HELLO}`);
});
server.on('error', console.error)