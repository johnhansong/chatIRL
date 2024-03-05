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
        imageURL: 'https://picsum.photos/211',
        preview: true
      },
      {
        imageableId: 2,
        imageableType: 'Group',
        imageURL: 'https://picsum.photos/202',
        preview: false
      },
      {
        imageableId: 2,
        imageableType: 'Group',
        imageURL: 'https://picsum.photos/212',
        preview: true
      },
      {
        imageableId: 3,
        imageableType: 'Group',
        imageURL: 'https://picsum.photos/213',
        preview: true
      },
      {
        imageableId: 1,
        imageableType: 'Event',
        imageURL: 'https://picsum.photos/211',
        preview: true
      },
      {
        imageableId: 2,
        imageableType: 'Event',
        imageURL: 'https://picsum.photos/212',
        preview: true
      },
      {
        imageableId: 3,
        imageableType: 'Event',
        imageURL: 'https://picsum.photos/203',
        preview: false
      },
      {
        imageableId: 4,
        imageableType: 'Event',
        imageURL: 'https://picsum.photos/213',
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
