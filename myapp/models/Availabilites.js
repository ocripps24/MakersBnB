'use strict';
module.exports = (sequelize, DataTypes) => {
  var Availabilites = sequelize.define('Availabilites', {
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
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    available: {
      allowNull: true,
      type: DataTypes.STRING
    },

  });

  return Availabilites;
};