"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/seconddb');

const Frenemy = sequelize.define('frenemies', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

Project.hasMany(Frenemy, {as: 'workers'});

sequelize.sync().then(() => {
  return Frenemy.create({
    name: 'Jane Doe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(frenemy) {
  console.log(frenemy.get({
    plain: true
  }));
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
});
