'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getImageable() {
      const type = get.imageableType;
      if (type === 'Group') {
        return this.getGroup()
      } else {
        return this.getEvent()
      }
    }

    static associate(models) {
      // define association here
      Image.belongsTo(models.Group, {
        foreignKey: 'imageableId',
        constraints: false,
      });
      Image.belongsTo(models.Event, {
        foreignKey: 'imageableId',
        constraints: false,
      })
    }
  }
  Image.init({
    imageableId: DataTypes.INTEGER,
    imageableType: DataTypes.ENUM(['Group', 'Event']),
    imageURL: DataTypes.STRING,
    preview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
