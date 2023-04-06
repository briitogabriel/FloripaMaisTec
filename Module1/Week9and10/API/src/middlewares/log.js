function log(req, res, next){

  console.log(`[${new Date().toISOString()}] ${req.method + req.path}`);

  Object.keys(req.body).length > 0 ?
    console.log('Body', req.body) : null;
  
  Object.keys(req.params).length > 0 ?
    console.log('Params', req.params) : null;

  next();
}
module.exports = log;