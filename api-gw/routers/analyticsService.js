import express from 'express';
import apiAdapter from './apiAdapter.js';
//import isAuthorized from '../controllers/requestAuthenticator.js';

const PORT = process.env.ANALYTICS_PORT || 4002;
const HOST = process.env.ANALYTICS_HOST || 'localhost';
const BASE_URL = `http://${HOST}:${PORT}`;
const api = apiAdapter(BASE_URL);

const router = express.Router();

router.get('/analytics*', (req, res) =>
  api
    .get(req.path)
    .then((apiRes) => {
      res.status(apiRes.status).send(apiRes.data);
    })
    .catch((error) => res.status(500).json(error))
);

router.put('/analytics*', (req, res) => {
  api
    .put(req.path)
    .then((apiRes) => res.status(apiRes.status).send(apiRes.data))
    .catch((error) => res.status(500).json(error));
});

//TODO: auth version

export default router;
