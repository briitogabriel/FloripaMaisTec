const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config({ path: './.env' });

async function createLogin (req, res) {
  try {
    const userInDatabase = await User.findOne({where:{
      cpf: req.body.cpf
    }});
  
    if (!userInDatabase) {
      return res.status(404).json({error: `Incorrect credentials.`});
    }
  
    const passwordIsValid = await bcrypt.compare(req.body.password, userInDatabase.password)
    if (!passwordIsValid) {
      return res.status(404).json({error: `Wrong password.`});
    }

    const token = jwt.sign(
      { id: userInDatabase.id },  // INFORMATION TO BE ENCRYPTED
      process.env.TOKEN_KEY,      // SECRET_KEY (example only in this exercise -> should use something specific and not obvious, through .ENV)
      { expiresIn: '1h' /*, algorithm: 'ES256' -> PADRÃO DE ALGORITMO USADO NA LIB */ }         // EXPIRATION TIMER = 1 minute (m), 1 hour (h)
    );
  
    res.status(200).json({message: `User ${userInDatabase.name} logged in!`, token: token})
    
  } catch (error) {
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = createLogin;