'use strict';
module.exports = (sequelize, DataTypes) => {
  const packages = sequelize.define('packages', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name:
    {
      type:DataTypes.STRING,
      allowNull:false,
    },
    btc_price:
    {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    eth_price:
    {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    status:
      {
        type:DataTypes.BOOLEAN,
        defaultValue:true,
      },

    createdAt:
    {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
  }, {});
  packages.associate = function(models)
  {
    // associations can be defined here
    packages.hasMany(models.client,
      {
        foreignKey:'packages_id',
        allowNull:true,

      });
  };
  return packages;
};