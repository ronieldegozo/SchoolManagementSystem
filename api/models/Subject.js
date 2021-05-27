const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Subject = sequelize.define('subject', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true  
  },
  subjectCode:{
    type: Sequelize.STRING,
    allowNull: false
  },
  subjectName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  units: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hour: {
    type: Sequelize.TIME,
    allowNull: false
  }, 
  subjectCategory: {
    type: Sequelize.STRING,
    allowNull: false
  },
  facultyName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Subject;
