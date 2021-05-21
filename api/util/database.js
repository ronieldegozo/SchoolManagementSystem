const Sequelize = require('sequelize');

const sequelize = new Sequelize('personal', 'root', 'Roniel061617', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false //LOGING SEQUELIZE IN TERMINAL DISABLE
});

module.exports = sequelize;
