import { v2 } from 'cloudinary';
import { CD_API_KEY, CD_API_SECRET, CD_NAME } from '../config/constants';

const cloudinary = v2;

cloudinary.config({
    cloud_name: CD_NAME,
    api_key: CD_API_KEY,
    api_secret: CD_API_SECRET,
});

export default cloudinary;
