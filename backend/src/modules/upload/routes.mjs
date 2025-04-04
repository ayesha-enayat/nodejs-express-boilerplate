import { Router } from 'express';
import multer from 'multer';
import uploadController from './controller/upload.mjs';
import path from 'path';

const router = Router();

// Configure multer
// const __dirname = path.basename('CWD')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
           cb(null, `src/modules/upload/files`); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage
});

// Route for file upload
router.post("/", upload.single('file'), uploadController);

export default router;
