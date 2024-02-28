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
        imagableId: 1,
        imageableType: 'Group',
        image: 'https://picsum.photos/201',
        preview: True
      },
      {
        imagableId: 2,
        imageableType: 'Group',
        image: 'https://picsum.photos/202',
        preview: False
      },
      {
        imagableId: 3,
        imageableType: 'Event',
        image: 'https://picsum.photos/203',
        preview: False
      },
      {
        imagableId: 4,
        imageableType: 'Event',
        image: 'https://picsum.photos/204',
        preview: False
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
