const users = require('../../data/users.json');
const idList = users.map(user => user.id);
let maxId = Math.max(...idList)

const getAllUsers = (_, res) => {
  res.status(200).json(users);
}

const getUserId = (req, res) => {
  const idRequest = parseInt(req.params.id);
  const userFound = users.find(user => (
    user.id === idRequest
  ));
  
  if(userFound == undefined) {
    res.status(400).json({message: `User ID not found.`});
  } else {
    res.status(200).json(userFound);
  }
}

const validateLeader = (req, res, next) => {
  if(req.body.position.toUpperCase() !== 'LEADER') {
    res.status(400).json({message: `Not allowed. Only Leaders can add new users.`});
  } else {
    next();
  }
};

const addUser = (req, res) => {
  const newUser = req.body;
  
  if(newUser.name.length > 0 && newUser.position.length > 0 && newUser.password.length > 0) {
    if(newUser.age >= 21) {
      const newId = maxId+1;
      users.push({
        "id": newId,
        "name": newUser.name,
        "age": newUser.age,
        "position": newUser.position,
        "password": newUser.password
      });
    
      res.status(200).json({message: `User ${newUser.name} created with success!`});
    
      // ---> COULD NOT FIX THIS ISSUE: Error: ENOENT: no such file or directory, open 'D:\\Tecnologia\\CURSOS\\Floripa_MaisTEC\\Modulo1\\data\\users.json'
    
      // fs.writeFile("../../data/users.json", JSON.stringify(users), (err) => {
      //   if (err) {
      //     res.status(400).json({message: `An error occured while writing JSON Object to File: ${err}`});
      //   } else {
      //     res.status(200).json({message: `User ${newUser.name} created with success!`});
      //   }
      // });
      maxId = newId;
    } else {
      res.status(400).json({message: `Not allowed. Users must be at least 21 years old to proceed.`})
    }
  } else {
    res.status(406).json({message: `Missing data! Please inform a valid user, containing name, age, position and password.`});
  }
};

const deleteUser = (req, res) => {
  const idRequest = parseInt(req.params.id) || null;
  
  if(idRequest > 0 || idRequest != null) {
    const userFound = users.find(user => (
      user.id === idRequest
    ));
  
    let deleteIndex = users.indexOf(userFound);

    if(deleteIndex > -1) {
      const deletedName = userFound.name;
      users.splice(deleteIndex, 1);
      res.status(200).json({message: `User ${deletedName} deleted.`});
    } else {
      res.status(400).json({message: `User ID not found.`});
    }
  } else {
    res.status(406).json({message: `Please inform a user ID.`});
  }
}

module.exports = {
  getUserId,
  getAllUsers,
  validateLeader,
  addUser,
  deleteUser
}