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
    }
  }
  Event.init({
    groupId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull:false
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
      allowNull:false
    },
    price: {
      type: DataTypes.DECIMAL(10,2)
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        ifAfter: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:false,
      validate: {
        isBefore: startDate.DATE
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
