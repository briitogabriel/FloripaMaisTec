const bcrypt = require('bcrypt')

function encryptPassword(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8)) // complexidade da criptografia em bits
}

module.exports = { encryptPassword }