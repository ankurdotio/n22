import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import songRoutes from "./routes/song.routes.js"
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


/* POST /auth/register */
/* POST /auth/login */
app.use('/auth',authRoutes)



/* POST /songs/upload */
/* GET /songs/get-songs */
/* GET /songs/get-song/:mama */
/* GET /songs/search-songs */
app.use('/songs', songRoutes);



export default app;