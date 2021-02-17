import express from 'express';
import * as controllers from '../controllers/controllers.js';
import isAuthorized from '../services/requestAuthenticator.js';

const router = express.Router();

router.get('/:collection/:code', isAuthorized, controllers.getOne);
router.get('/:collection', isAuthorized, controllers.getAll);
router.get('/', isAuthorized, controllers.usage); //FIXME: show this for non-existing collections

export default router;
