'use strict';

const { Event } = require('../models');

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.tableName = 'Events'
    await Event.bulkCreate([
      {
        groupId: 1,
        venueId: 1,
        name: "Speed Soccer",
        description: "A fun 6v6 fast paced game of soccer. Cleats required",
        type: "In person",
        capacity: 15,
        price: "5.00",
        startDate: "2026-02-28 8:00:00",
        endDate: "2026-03-28 12:00:00"
      },
      {
        groupId: 1,
        venueId: 2,
        name: "Speed Soccer",
        description: "A fun 6v6 fast paced game of soccer. Cleats required",
        type: "In person",
        capacity: 15,
        price: "5.00",
        startDate: "2026-04-28 8:00:00",
        endDate: "2026-05-28 11:00:00"
      },
      {
        groupId: 2,
        venueId: 3,
        name: "Pokemon Go Raids",
        description: "Come join us for gym raids. Must be able to drive or have a ride.",
        type: "In Person",
        capacity: 20,
        price: "0.00",
        startDate: "2026-06-28 1:30:00",
        endDate: "2026-07-28 5:00:00"
      },
      {
        groupId: 3,
        venueId: 4,
        name: "League Clash",
        description: "Join our clash team next weekend! ($5 will be refunded after the tournament ends)",
        type: "Online",
        capacity: 15,
        price: "5.00",
        startDate: "2026-04-25 4:00:00",
        endDate: "2026-04-26 6:30:00"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Events';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      groupId: { [Op.in]: [1, 2, 3, 4] }
    })
  }
};
