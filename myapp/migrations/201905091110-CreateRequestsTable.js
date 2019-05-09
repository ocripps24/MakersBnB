'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
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
      user_id: {
      	allowNull: false,
      	type: Sequelize.STRING
      },
      date: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Requests');
  }
};