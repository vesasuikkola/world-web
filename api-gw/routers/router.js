import express from 'express';
import worldRouter from './worldService.js';
import analyticsRouter from './analyticsService.js';
import logger from '../services/logService.js';
//import authRouter from '../controllers/AuthController.js';

const router = express.Router();
router.use(logger);

router.use(worldRouter);
router.use(analyticsRouter);
//router.use(authRouter);

export default router;
