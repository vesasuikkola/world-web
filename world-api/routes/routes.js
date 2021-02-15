import express from 'express';
import * as controllers from '../controllers/controllers.js';

const router = express.Router();

router.get('/', controllers.usage);
router.get('/:collection', controllers.getAll);
router.get('/:collection/:code', controllers.getOne);

export default router;
