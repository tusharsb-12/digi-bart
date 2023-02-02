import dotenv from 'dotenv';
import express from 'express';
import { PORT } from './config/constants';

dotenv.config();

const main = async () => {
    try {
        const app = express();

        app.use('/', (req, res) => {
            return res.send('Hello');
        });

        app.listen(PORT, () => {
            console.log(`Listening to port: ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(-1);
    }
};

main();
