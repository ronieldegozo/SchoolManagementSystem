const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Personal = sequelize.define('personal', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  studType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  studentNumber: {
    type: Sequelize.STRING,
    unique: true
  },
  lastname: {
    type: Sequelize.STRING
  },
  firstname: {
    type: Sequelize.STRING
  },
  middleInitial: {
    type: Sequelize.STRING
  },
  birthday: {
    type: Sequelize.DATE
  },
  age: {
    type: Sequelize.STRING
  },

  housenum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  barangay: {
    type: Sequelize.STRING,
    allowNull: false
  },
  municipality: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },

  cnumber: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  gender: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  nationality: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  religion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  collegeDepartment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  course: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year:{
    type: Sequelize.INTEGER,
    allowNull: false
  },

});

module.exports = Personal;

