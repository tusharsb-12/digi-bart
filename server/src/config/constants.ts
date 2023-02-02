import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

// Database
export const DB_URI = process.env.DB_URI;

// Json Web token
export const JWT_SECRET = process.env.JWT_SECRET;

// Cloudinary
export const CD_NAME = process.env.CD_NAME;
export const CD_API_KEY = process.env.CD_API_KEY;
export const CD_API_SECRET = process.env.CD_API_SECRET;

// ArcGIS
export const ARCGIS_API_KEY = process.env.ARCGIS_API_KEY;
