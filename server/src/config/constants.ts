import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

// Database
export const DB_URI = process.env.DB_URI;

// Json Web token
export const JWT_SECRET = process.env.JWT_SECRET;
