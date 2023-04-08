const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  try {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization;

    if (!token || token === 'Bearer') {
      return res.status(403).json({ message: 'Token unnauthorized' })
    }

    const tokenJWT = token.slice(7);  //remove "Bearer " from the req content
    jwt.verify(tokenJWT, 'SECRET_KEY', (err, tokenContent) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(403).json({ message: 'Expired token' })
        } else if (err.name === 'JsonWebTokenError') {
          return res.status(403).json({ message: 'Invalid token' })
        }
        return res.status(403).json({ message: 'Token error' })
        
      } else {
        console.log(tokenContent);
        req.body.userId = tokenContent.id;  // tokenContent.id comes from createLogin jwt.sign (authentication)
        next();
      }
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = validateToken;