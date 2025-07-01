import express from 'express';
import { upload,getSongs,getSongById ,searchSong} from '../controllers/song.controller.js';
import multer from 'multer';


const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage: storage }); 

const router = express.Router();


router.post('/upload', uploadMiddleware.single("chacha") ,upload)

router.get('/get-songs',getSongs)

router.get('/get-song/:mama',getSongById)

router.get('/search-songs',searchSong)



export default router;