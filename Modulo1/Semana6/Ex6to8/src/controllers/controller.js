const fs = require('fs');

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

const addUser = (req, res) => {
  const newId = maxId+1;
  const newName = req.body.name;

  if(newName.length > 0) {
    users.push({
      "id": newId,
      "name": newName
    });
  
    res.status(200).json({message: `User ${newName} created with success!`});
  
    // ---> COULD NOT FIX THIS ISSUE: Error: ENOENT: no such file or directory, open 'D:\\Tecnologia\\CURSOS\\Floripa_MaisTEC\\Modulo1\\data\\users.json'
  
    // fs.writeFile("../../data/users.json", JSON.stringify(users), (err) => {
    //   if (err) {
    //     res.status(400).json({message: `An error occured while writing JSON Object to File: ${err}`});
    //   } else {
    //     res.status(200).json({message: `User ${newName} created with success!`});
    //   }
    // });
    maxId = newId;
  } else {
    res.status(400).json({message: `Please inform a valid user name.`});
  }
}

const deleteUser = (req, res) => {
  const idRequest = parseInt(req.body.id);
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
}

module.exports = {
  getUserId,
  getAllUsers,
  addUser,
  deleteUser
}