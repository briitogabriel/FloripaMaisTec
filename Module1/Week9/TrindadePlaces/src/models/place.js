const { Sequelize } = require('sequelize');
const connection = require('../database');

const Place = connection.define('places', {
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  telephone: {
    type: Sequelize.STRING(14), // (xx)yyyyy-yyyy
    allowNull: false,
  },

  openingHours: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  latitude: {
    type: Sequelize.DECIMAL(8,4), // +-xx.xxxx
    allowNull: false,
  },

  longitude: {
    type: Sequelize.DECIMAL(8,4), // +-xx.xxxx
    allowNull: false,
  }
});

module.exports = Place;