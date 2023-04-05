const { Sequelize } = require('sequelize');
const connection = require('../database');

const User = connection.define('users', {
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // lastName: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },

  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  }

  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },

  // age: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
});

// ----------> EXAMPLE OF SEQUELIZE HOOK TO ENCRYPT THE PASSWORD THROUGH MODEL (substitute the route validantion)
// User.beforeSave(async (user) => {
//   if (user.changed('password')) {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//   }
// });

module.exports = User;