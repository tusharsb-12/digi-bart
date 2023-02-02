import { Router } from 'express';
import { createUser, loginUser, userDetails } from '../controllers/user';
import authenticate from '../middleware/auth';

const router = Router();

router.post('/login', loginUser);
router.post('/register', createUser);
router.get('/user-details', authenticate, userDetails);

export default router;
