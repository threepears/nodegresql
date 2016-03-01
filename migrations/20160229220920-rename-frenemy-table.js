'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('frenemy', 'Frenemy');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('Frenemy', 'frenemy');
  }
};

