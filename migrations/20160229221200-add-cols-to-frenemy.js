'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frenemy', 'id', {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        }
      )
      .addColumn(
        'Frenemy', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      )
      .addColumn(
        'Frenemy', 'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface
      .removeColumn('Frenemy', 'id')
      .removeColumn('Frenemy', 'createdAt')
      .removeColumn('Frenemy', 'updatedAt');
  }
};

