import {Router} from 'express';
import userRoutes from '../modules/user/routes.mjs';
import productRoutes from '../modules/product/routes.mjs';
import uploadRoutes from '../modules/upload/routes.mjs';
import categoryRoutes from '../modules/category/routes.mjs';


const router = Router();

router.use('/user',userRoutes);
router.use('/product',productRoutes);
router.use('/upload',uploadRoutes);
router.use('/category',categoryRoutes);

export default router;