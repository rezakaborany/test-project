const Sequelize = require('sequelize');
const db = require('../../config/db');

const Category = db.define('category', {
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
    parent: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        },
    allowNull: true
}
});

module.exports = Category;