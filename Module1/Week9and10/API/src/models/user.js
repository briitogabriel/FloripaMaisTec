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
    allowNull: false
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

module.exports = User;