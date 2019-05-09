'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Properties', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      
      allowNull: false,
      primaryKey: true
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: true,
      type: DataTypes.STRING
    },

  });

  return Properties;
};