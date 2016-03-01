"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/seconddb');

const Frenemy = sequelize.define('Frenemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE,
  friend: Sequelize.BOOLEAN
});

const Project = sequelize.define('projects', {
  name: Sequelize.STRING
});

Project.hasMany(Frenemy);

let jane;

sequelize.sync().then(() => {
  jane = Frenemy.create({
    name: 'Jane Doe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(frenemy) {
  console.log(jane);
  }).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
}).then((project) => {
  // jane.addProject(project);
});
