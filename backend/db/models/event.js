'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Event.hasMany(models.Image, {
        as: 'EventImages',
        foreignKey: 'imageableId',
        constraints: false,
        scope: {
          imageableType: "Event"
        },
        onDelete: 'CASCADE'
      })

      Event.hasMany(models.Attendance, {
        foreignKey: 'eventId',
        onDelete: "CASCADE"
      })

      Event.belongsTo(models.Group, { foreignKey: 'groupId', onDelete: 'CASCADE' })
      Event.belongsTo(models.Venue, { foreignKey: 'venueId', onDelete: 'CASCADE' })
    }
  }
  Event.init({
    groupId: {
      type: DataTypes.INTEGER,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [5, 128]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isIn: [['Online', 'In person']]
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL(10,2)
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        isAfter: new Date().toLocaleString('en-us',
        {hour12:false}).split('/').join('-').split(',').join(' ')
      },
      // get() {
      //   const dateTime = this.getDataValue
      //   return dateTime
      // }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:false,
      // validate: {
      //   // isAfter: Event.startDate,
      // },
    }
  }, {
    sequelize,
    modelName: 'Event',
    defaultScope: {
      attributes: {
        exclude: ["description", "capacity", "price", "numAttending"]
      }
    }
  });
  return Event;
};
