module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.body = {
      auth: true,
      token: 'dummy-jwt'
    };
    req.query = req.body;
  }
  next();
};
