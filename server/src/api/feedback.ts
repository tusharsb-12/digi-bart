import { Router } from 'express';
import {
    buyerFeedback,
    createFeedback,
    sellerFeedback,
} from '../controllers/feedback';

const router = Router();

router.post('/create', createFeedback);
router.get('/buyer-feedback', buyerFeedback);
router.get('/seller-feedback', sellerFeedback);

export default router;
