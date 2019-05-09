'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Availabilites', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      properties_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      date: {
      	allowNull: false,
      	type: Sequelize.DATEONLY
      },
      available: {
        allowNull: true,
        type: Sequelize.STRING
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Availabilites');
  }
};