
// CONFIG OF A MODEL TO CREATE TABLE

const { Sequelize } = require('sequelize');
const database = require('./db');

  // ---------- CREATE TABLE
const Equipment = database.define('equipment', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },

  preco: Sequelize.DECIMAL,
  descricao: Sequelize.STRING

});

module.exports = Equipment;