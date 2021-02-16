import express from 'express';
import * as controllers from '../controllers/controllers.js';

const router = express.Router();

router.get('/', controllers.usage);
router.get('/views', controllers.getAll);
router.get('/views/:code', controllers.getOne);
router.put('/views/:code', controllers.addOrUpdate);

export default router;
