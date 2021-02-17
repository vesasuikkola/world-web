import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './services/dbService.js';

import { API_PATH } from './constants/constants.js';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(API_PATH, routes);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () => console.log(`World API running on ${HOST}:${PORT}`));
