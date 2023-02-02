import { Router } from 'express';
import { createUser, loginUser } from '../controllers/user';

const router = Router();

router.post('/login', loginUser);
router.post('/register', createUser);

export default router;
