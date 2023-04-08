const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token || token === 'Bearer') {
      return res.status(403).json({ message: 'Token unnauthorized' })
    }

    const tokenJWT = token.slice(7);
    jwt.verify(tokenJWT, process.env.TOKEN_KEY, (err, tokenContent) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(403).json({ message: 'Expired token' })
        } else if (err.name === 'JsonWebTokenError') {
          return res.status(403).json({ message: 'Invalid token' })
        }
        return res.status(403).json({ message: 'Token error' })
        
      } else {
        req.body.userId = tokenContent.id;
        next();
      }
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = validateToken;