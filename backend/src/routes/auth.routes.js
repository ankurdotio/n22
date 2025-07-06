import express from 'express';
import {registerUser,loginUser,me}from "../controllers/auth.controller.js";

const router = express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',me)

export default router;