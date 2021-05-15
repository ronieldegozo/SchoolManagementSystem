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
    allowNull: false,
    unique: true
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middleInitial: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthDay: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
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

