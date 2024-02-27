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

      Event.belongsTo(models.Group, { foreignKey: 'groupId' })
      Event.belongsTo(models.Venue, { foreignKey: 'venueId' })
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
        ifAfter: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        isBefore: Event.startDate
      }
    }
  }, {
    sequelize,
    modelName: 'Event',
    defaultScope: {
      attributes: {
        exclude: ["description", "capacity", "price", "numAttending", ""]
      }
    }
  });
  return Event;
};
