import express from 'express';
import worldRouter from './worldService.js';
import analyticsRouter from './analyticsService.js';
//import authRouter from '../controllers/AuthController.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log(
    new Date(Date.now()).toISOString(),
    ': call to',
    req.method,
    req.path
  );
  next();
});

router.use(worldRouter);
router.use(analyticsRouter);
//router.use(authRouter);

export default router;
