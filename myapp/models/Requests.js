'use strict';
module.exports = (sequelize, DataTypes) => {
  var Requests = sequelize.define('Requests', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      
      allowNull: false,
      primaryKey: true
    },
    properties_id: {
      allowNull: true,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: true,
      type: DataTypes.DATEONLY
    },

  });

  return Requests;
};