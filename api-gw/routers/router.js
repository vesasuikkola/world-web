import express from 'express';
import logger from '../services/logService.js';

const router = express.Router();
router.use(logger);
router.get('/', (req, res) => res.send('Simple API Gateway'));

//TODO
//import authRouter from '../controllers/AuthController.js';
//router.use(authRouter);

// Analytics API
import * as analyticsAPI from '../controllers/analyticsController.js';
router.get('/analytics*', analyticsAPI.get);
router.put('/analytics*', analyticsAPI.put);

// World API
import * as worldAPI from '../controllers/worldController.js';
router.get('/world*', worldAPI.get);

export default router;
