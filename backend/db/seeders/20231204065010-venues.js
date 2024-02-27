'use strict';

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Venues"
    await queryInterface.bulkInsert(options, [
      {
        groupId: 1,
        address: "1 California Street",
        city: "San Francisco",
        state: "CA",
        lat: 37.7932,
        lng: 122.3972
      },
      {
        groupId: 2,
        address: "294 Wilshire Blvd",
        city: "Los Angeles",
        state: "CA",
      },
      {
        groupId: 3,
        address: "495 La Jolla Blvd",
        city: "San Diego",
        state: "CA",
      },
      {
        groupId: 3,
        city: "San Diego",
        state: "CA",
      },
      {
        groupId: 4,
        city: "Irvine",
        state: "CA",
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Venues';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5] }
    })
  }
};
