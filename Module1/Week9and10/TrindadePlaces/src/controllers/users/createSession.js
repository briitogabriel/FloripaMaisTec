const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config({ path: './.env' });

async function createSession (req, res) {
  try {
    console.log(req.body)
    const userInDataBase = await User.findOne({ where:
      { username: req.body.username }
    });

    if (!userInDataBase) {
      return res.status(404).json({error: `Username ${req.body.username} not found.`});
    };

    console.log(userInDataBase)

    const passwordIsValid = await bcrypt.compare(req.body.password, userInDataBase.password);
    if (!passwordIsValid) {
      return res.status(404).json({error: `Wrong credentials.`});
    }

    const token = jwt.sign(
      { userId: userInDataBase.id },
        process.env.TOKEN_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: `User ${userInDataBase.name} logged in!`, token: token });

  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = createSession;