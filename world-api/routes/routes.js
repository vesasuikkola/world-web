import express from 'express';
import * as controllers from '../controllers/controllers.js';

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

router.get('/:collection/:code', controllers.getOne);
router.get('/:collection', controllers.getAll);
router.get('/', controllers.usage); //FIXME: show this for non-existing collections

export default router;
