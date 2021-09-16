const { Sequelize } = require('sequelize');
const db = new Sequelize('yourDatabaseName', 'yourUsername', 'yourPassword', {
    host: 'localhost',
    dialect: 'yourDialect',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
