import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/router.js';
import db from './db.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Simple API Gateway');
});

app.use(router);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () =>
  console.log(`Simple API Gateway running on ${HOST}:${PORT}`)
);
