const Sequelize = require('sequelize');

require('dotenv').config({ path: './.env' });

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.USERNAME_PG,
  password: process.env.PASSWORD_PG,
  database: 'trindade_places',
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
});

module.exports = connection;