import { Router } from 'express';
import authenticate from '../middleware/auth';
import { userOffers, userTrades } from '../controllers/trade';

const router = Router();

router.get('/my-trades', authenticate, userTrades);
router.get('/my-offers', authenticate, userOffers);

export default router;
