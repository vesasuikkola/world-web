import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//TODO: move mongodb connection to a separate class?
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("We're connected with MongoDB!"));
//

import { API_PATH } from './constants/constants.js';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(API_PATH, routes);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () => console.log(`World API running on ${HOST}:${PORT}`));
