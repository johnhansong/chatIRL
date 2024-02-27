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
        as: "Organizer",
        foreignKey: 'organizerId',
      })

      Group.hasMany(models.Venue, {
        foreignKey: 'groupId',
        onDelete: "CASCADE",
      })
      Group.hasMany(models.Event, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE',      })

      Group.hasMany(models.Membership, {
        foreignKey: 'groupId',
        onDelete: "CASCADE",
      })

      Group.hasMany(models.Image, {
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
      references: {
        model: 'User',
        key: 'id'
      },
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 60],
      }
    },
    about: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate: {
        len: [50, 1000]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isIn: [['Online', 'In person']]
      }
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [2, 2]
      }
    },
    previewImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: true,
      },
    }
  }, {
    sequelize,
    modelName: 'Group',
    // defaultScope: {
    //   attributes: {
    //     exclude: ['createdAt', "updatedAt", "previewImage"]
    //   }
    // }
  });
  return Group;
};
