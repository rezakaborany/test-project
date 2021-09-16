const Sequelize = require('sequelize');
const db = require('../../config/db');

const Product= db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    percentages: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue:0
    },
    category: {
            type: Sequelize.INTEGER,
            references: {
              model: "categories",
              key: "id"
            },
        allowNull: true
    }

});

module.exports = Product;