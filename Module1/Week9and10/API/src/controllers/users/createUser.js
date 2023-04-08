const User = require('../../models/user');
const bcrypt = require('bcrypt');

async function createUser (req, res) {
  try {
    const { name, cpf, password } = req.body;
    const hash = await bcrypt.hash(password, 10)  // (VAR, SaltRounds) -> security level x processing

    cpf_numb = cpf.replace(/\D/g,'')
    
    const userInDatabase = await User.findOne({ where: {
      cpf: cpf
    }});
    
    if (!name || !cpf_numb || !password) {
      return res.status(400).json({error: "Name, CPF and Password are mandatory."});
    } else
      
      if (userInDatabase) {
        return res.status(403).json({error: `User ${cpf_numb} already exists.`}); //Should not return aditional information to others
    }
    
    const newUser = {
      name,
      cpf: cpf_numb,
      password: hash
    };

    const user = await User.create(newUser);
    // const { password, ...rest } = await User.create(newUser); -> DESTRUCTURING TO GET ALL DATA BUT PASSWORD (Should not retrieve password in res.json())
    res.status(201).json({ user: {
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      updatedAt: user.updatedAt,
      createdAt: user.createdAt
    }});

  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = createUser;