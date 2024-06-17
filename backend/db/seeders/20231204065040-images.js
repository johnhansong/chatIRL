'use strict';

const { Image } = require("../models")

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.tableName = 'Images'
    await Image.bulkCreate([
      {
        imageableId: 1,
        imageableType: 'Group',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouSp2cG82heTL3zHtpProiyBrF9ViiuYPGQ&s',
        preview: true
      },
      {
        imageableId: 2,
        imageableType: 'Group',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Hn1G5VAD5VSO0WSfhPtjjIKlNYYJzCWnuQ&s',
        preview: false
      },
      {
        imageableId: 2,
        imageableType: 'Group',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Hn1G5VAD5VSO0WSfhPtjjIKlNYYJzCWnuQ&s',
        preview: true
      },
      {
        imageableId: 3,
        imageableType: 'Group',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCWgidz1A44xE5neIJIknsWC0uzlrJa6tkw&s',
        preview: true
      },
      {
        imageableId: 1,
        imageableType: 'Event',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouSp2cG82heTL3zHtpProiyBrF9ViiuYPGQ&s',
        preview: true
      },
      {
        imageableId: 2,
        imageableType: 'Event',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouSp2cG82heTL3zHtpProiyBrF9ViiuYPGQ&s',
        preview: true
      },
      {
        imageableId: 3,
        imageableType: 'Event',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpNZutPlZxGFaMWMYu81O7Wmfrm2WXekoMg&s',
        preview: false
      },
      {
        imageableId: 4,
        imageableType: 'Event',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0EampMv_N8luRwjjTBRJfTsXlSrqEsReMw&s',
        preview: true
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Images';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4] }
    })
  }
};
