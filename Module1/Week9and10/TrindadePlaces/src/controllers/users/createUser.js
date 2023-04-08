const User = require('../../models/user');
const bcrypt = require('bcrypt');

async function createUser (req, res) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    const userInDataBase = await User.findOne({ where:
    {
      username: req.body.username
    }});

    if (!req.body.name || !req.body.email || !req.body.username || !req.body.password) {
      return res.status(400).json({error: "All fields are mandatory."});  
    } else if (userInDataBase) {
      return res.status(403).json({error: `User ${req.body.username} already exists.`});
    }
    
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash
    }

    const postNewUser = await User.create(newUser);
    res.status(201).json(postNewUser);
    console.log(`${Date()} -> New user inserted into table`)
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Could not process your request'});
  }
  
}

module.exports = createUser;