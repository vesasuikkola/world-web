export default (req, res, next) => {
  console.log(
    new Date(Date.now()).toISOString(),
    ': call to',
    req.method,
    req.path
  );
  next();
};
