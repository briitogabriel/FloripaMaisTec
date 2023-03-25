
// DATABASE CONFIG CONNECTION (1st STEP TO INTERACT WITH A DATABASE)

const { Sequelize } = require('sequelize');

require('dotenv').config({ path: './.env' });

const sequelize = new Sequelize('Trindade', process.env.USERNAME_PG, process.env.PASSWORD_PG, {

    dialect: 'postgres',
    host: 'localhost',
    port: '5432'

});

module.exports = sequelize