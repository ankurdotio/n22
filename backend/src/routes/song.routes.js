import express from 'express';
import { upload } from '../controllers/song.controller.js';
import multer from 'multer';


const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage: storage }); 

const router = express.Router();


router.post('/upload', uploadMiddleware.single("chacha") ,upload)

export default router;