'use strict';

const { Attendance } = require("../models")

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.tableName = 'Attendances';
    await Attendance.bulkCreate([
      {
        userId: 1,
        eventId: 1,
        status: 'attending'
      },
      {
        userId: 2,
        eventId: 1,
        status: 'attending'
      },
      {
        userId: 3,
        eventId: 1,
        status: 'pending'
      },
      {
        userId: 1,
        eventId: 2,
        status: 'pending'
      },
      {
        userId: 2,
        eventId: 2,
        status: 'waitlist'
      },
      {
        userId: 3,
        eventId: 2,
        status: 'waitlist'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Attendances';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6] }
    })
  }
};
