'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
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
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
      	allowNull: false,
      	type: Sequelize.STRING
      },
      price: {
        allowNull: true,
        type: Sequelize.STRING
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};