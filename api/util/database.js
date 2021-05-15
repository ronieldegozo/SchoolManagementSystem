const Sequelize = require('sequelize');

const sequelize = new Sequelize('personal', 'root', 'Roniel061617', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
