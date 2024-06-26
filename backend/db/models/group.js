'use strict';
const {
  Model,
  validator
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {

    static associate(models) {
      // define association here
      Group.belongsTo(models.User, {
        as: 'Organizer',
        foreignKey: 'organizerId',
        onDelete: 'CASCADE'
      })

      Group.hasMany(models.Venue, {
        foreignKey: 'groupId',
        onDelete: "CASCADE",
      })

      Group.hasMany(models.Event, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE',
      })

      Group.hasMany(models.Membership, {
        foreignKey: 'groupId',
        onDelete: "CASCADE",
      })

      Group.hasMany(models.Image, {
        as: "GroupImages",
        foreignKey: 'imageableId',
        constraints: false,
        scope: {
          imageableType: "Group"
        },
        onDelete: 'CASCADE'
      })

    }
  }
  Group.init({
    organizerId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Users',
      //   key: 'id'
      // },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 60],
      }
    },
    about: {
      type: DataTypes.TEXT,
      validate: {
        len: [50, 1000]
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['Online', 'In person']]
      }
    },
    private: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // }
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
