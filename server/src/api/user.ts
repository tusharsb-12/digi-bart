import { Router } from 'express';
import {
    createUser,
    loginUser,
    updateUser,
    userDetails,
} from '../controllers/user';
import authenticate from '../middleware/auth';
import { locationBasedProducts, userProducts } from '../controllers/product';

const router = Router();

router.post('/login', loginUser);
router.post('/register', createUser);
router.get('/user-details', authenticate, userDetails);
router.put('/update', authenticate, updateUser);
router.get('/explore', authenticate, locationBasedProducts);
router.get('/my-products', authenticate, userProducts);

export default router;
