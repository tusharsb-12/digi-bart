import { Router } from 'express';
import { postProduct } from '../controllers/product';
import { upload } from '../utils';

const router = Router();

router.post('/post', upload.array('images', 10), postProduct);

export default router;
