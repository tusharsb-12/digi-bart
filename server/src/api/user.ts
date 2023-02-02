import { Router } from 'express';
import {
    createUser,
    loginUser,
    updateUser,
    userDetails,
} from '../controllers/user';
import authenticate from '../middleware/auth';
import { locationBasedProducts } from '../controllers/product';

const router = Router();

router.post('/login', loginUser);
router.post('/register', createUser);
router.get('/user-details', authenticate, userDetails);
router.put('/update', authenticate, updateUser);
router.get('/explore', authenticate, locationBasedProducts);

export default router;
