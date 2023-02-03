import { Router } from 'express';
import authenticate from '../middleware/auth';
import {
    acceptTrade,
    barterOffer,
    createTrade,
    rejectTrade,
    userOffers,
    userTrades,
} from '../controllers/trade';

const router = Router();

router.post('/create-trade', createTrade);
router.get('/my-trades', authenticate, userTrades);
router.get('/my-offers', authenticate, userOffers);
router.get('/barter-offer/:id', barterOffer);
router.post('/accept-trade/:id', acceptTrade);
router.post('/reject-trade/:id', rejectTrade);

export default router;
