import cors from 'cors';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import { DB_URI, PORT } from './config/constants';
import { connect, set } from 'mongoose';
import { productRoutes, userRoutes } from './api';

dotenv.config();

const main = async () => {
    try {
        const app = express();

        // Database connection
        connect(DB_URI!);
        set('strictQuery', true);

        app.use(cors());
        app.use(json());
        app.use(urlencoded({ extended: true }));

        // Routes
        app.use('/api/user', userRoutes);
        app.use('/api/product', productRoutes);

        app.listen(PORT, () => {
            console.log(`Listening to port: ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(-1);
    }
};

main();
