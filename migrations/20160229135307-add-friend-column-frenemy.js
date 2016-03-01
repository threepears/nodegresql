'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'frenemy',
      'friend',
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'frenemy',
      'friend'
    );
  }
};
