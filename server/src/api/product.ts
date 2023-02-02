import { Router } from 'express';
import {
    getAllProducts,
    filterProducts,
    postProduct,
} from '../controllers/product';
import { upload } from '../utils';
import authenticate from '../middleware/auth';

const router = Router();

router.get('/all', getAllProducts);
router.post('/post', authenticate, upload.array('images', 10), postProduct);
router.get('/filter', filterProducts);
router.get('/product/:id', () => {});

export default router;
