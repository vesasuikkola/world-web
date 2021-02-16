import jwt from 'jsonwebtoken';
import config from '../config.js';

export default (req, res, next) => {
  if (!req.headers['authorization']) {
    res.status(401).send('Unauthorized');
  } else {
    jwt.verify(req.headers['authorization'], config.secret, (err, decoded) => {
      if (err) {
        res.status(403).send('Forbidden');
      } else {
        next();
      }
    });
  }
};
