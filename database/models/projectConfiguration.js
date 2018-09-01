'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectConfiguration = sequelize.define('projectConfiguration', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    uniqueId:
    {
      allowNull:true,
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    siteName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coinName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokenSupply:
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    softCap:
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hardCap:
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate:
    {
      type:DataTypes.DATE,
      allowNull: true,
    },
    endDate:
    {
      type:DataTypes.DATE,
      allowNull: true,
    } ,
    homeURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aboutusURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    createdAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
  }, {});
  projectConfiguration.associate = function(models)
  {
    // associations can be defined here
    
    //currency define
    projectConfiguration.hasOne(models.currency,
      {
        foreignKey: 'project_id',
        allowNull:true,
      });
    
      projectConfiguration.hasMany(models.user,
        {
          foreignkey: 'project_id',
          allowNull:false,
          onDelete:'CASCADE'
        })
  };
  return projectConfiguration;
};