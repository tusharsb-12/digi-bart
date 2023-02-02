import { Router } from 'express';
import {
    getAllProducts,
    getCategoryProducts,
    postProduct,
} from '../controllers/product';
import { upload } from '../utils';

const router = Router();

router.get('/all', getAllProducts);
router.post('/post', upload.array('images', 10), postProduct);
router.get('/get-category/:category', getCategoryProducts);

export default router;
