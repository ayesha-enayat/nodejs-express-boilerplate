import {Router} from 'express';
import userRoutes from '../modules/user/routes.mjs';
import productRoutes from '../modules/product/routes.mjs';


const router = Router();

router.use('/user',userRoutes);
router.use('/product',productRoutes);

export default router;