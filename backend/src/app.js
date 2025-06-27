import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import songRoutes from "./routes/song.routes.js"


const app = express();
app.use(express.json());

app.use('/',authRoutes)
app.use('/', songRoutes);


export default app;