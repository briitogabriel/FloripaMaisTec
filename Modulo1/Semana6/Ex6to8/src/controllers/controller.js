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
  res.status(200).json(userFound);
}

const addUser = (req, res) => {
  const newId = maxId+1;
  const newName = req.body.name;

  users.push({
    "id": newId,
    "name": newName
  });

  res.status(200).json({message: `User ${newName} created with success!`});

  // fs.writeFile("../../data/users.json", JSON.stringify(users), 'utf8', (err) => {
  //   if (err) {
  //     res.status(400).json({message: `An error occured while writing JSON Object to File: ${err}`});
  //   } else {
  //     res.status(200).json({message: "User created with success!"});
  //   }
  // });
  maxId = newId;
}

module.exports = {
  getUserId,
  getAllUsers,
  addUser
}