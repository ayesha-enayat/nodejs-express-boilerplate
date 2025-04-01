import { Router } from "express";
import getController from './controller/get.mjs';
import postController from './controller/post.mjs';
import deleteController from "./controller/delete.mjs";
import updateController from "./controller/update.mjs";


const router = Router();

router.get('/',getController);
router.post('/',postController);
router.delete('/:id',deleteController);
router.put('/:id',updateController);

export default router;