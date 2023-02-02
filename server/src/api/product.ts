import { Router } from 'express';
import {
    getAllProducts,
    filterProducts,
    postProduct,
    getProductById,
} from '../controllers/product';
import { upload } from '../utils';
import authenticate from '../middleware/auth';

const router = Router();

router.get('/all', getAllProducts);
router.post('/post', authenticate, upload.array('images', 10), postProduct);
router.get('/filter', filterProducts);
router.get('/:id', getProductById);

export default router;
