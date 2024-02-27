'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Events'
    await queryInterface.bulkInsert(options, [
      {
        groupId: 1,
        venueId: 1,
        name: "Speed Soccer",
        type: "In person",
        capacity: "15",
        price: "5.00",
        description: "A fun 6v6 fast paced game of soccer. Cleats required",
        startDate: "02/28/2026",
        endDate: "03/28/2026"
      },
      {
        groupId: 1,
        venueId: 2,
        name: "Speed Soccer",
        type: "In person",
        capacity: "15",
        price: "5.00",
        description: "A fun 6v6 fast paced game of soccer. Cleats required",
        startDate: "04/28/2026",
        endDate: "05/28/2026"
      },
      {
        groupId: 2,
        venueId: 3,
        name: "Pokemon Go Raids",
        type: "In Person",
        capacity: "20",
        price: "0.00",
        description: "Come join us for gym raids. Must be able to drive or have a ride.",
        startDate: "02/28/2026",
        endDate: "03/28/2026"
      },
      {
        groupId: 3,
        venueId: 4,
        name: "League Clash",
        type: "Online",
        capacity: "15",
        price: "5.00",
        description: "Join our clash team next weekend! ($5 will be refunded after the tournament ends)",
        startDate: "06/24/2026",
        endDate: "06/25/2026"
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
