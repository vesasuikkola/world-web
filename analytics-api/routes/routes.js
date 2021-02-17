import express from 'express';
import * as controllers from '../controllers/controllers.js';
import isAuthorized from '../services/requestAuthenticator.js';

const router = express.Router();

router.get('/', isAuthorized, controllers.usage);
router.get('/views', isAuthorized, controllers.getAll);
router.get('/views/:code', isAuthorized, controllers.getOne);
router.put('/views/:code', isAuthorized, controllers.addOrUpdate);

export default router;
