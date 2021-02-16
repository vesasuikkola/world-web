import express from 'express';
import apiAdapter from './apiAdapter.js';
//import isAuthorized from '../controllers/requestAuthenticator.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.WORLD_PORT || 4001;
const HOST = process.env.WORLD_HOST || 'localhost';
const BASE_URL = `http://${HOST}:${PORT}`;
const api = apiAdapter(BASE_URL);

const router = express.Router();

router.get('/world*', (req, res) =>
  api
    .get(req.path)
    .then((apiRes) => {
      res.status(apiRes.status).send(apiRes.data);
    })
    .catch((error) => res.status(500).json(error))
);

//TODO: version with authorization on the api-gw level
// router.get('/world*', isAuthorized, (req, res) => {
//   api
//     .get(req.path)
//     .then((resp) => {
//       res.send(resp.data);
//     })
//     .catch((error) => res.json(error));
// });

export default router;
