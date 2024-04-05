'use strict';

const { Membership } = require("../models")

/** @type {import('sequelize-cli').Migration} */

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.tableName = 'Memberships';
    await Membership.bulkCreate([
      {
        userId: 1,
        groupId: 1,
        status: 'co-host'
      },
      {
        userId: 1,
        groupId: 2,
        status: 'member'
      },
      {
        userId: 2,
        groupId: 1,
        status: 'member'
      },
      {
        userId: 3,
        groupId: 1,
        status: 'pending'
      },
      {
        userId: 1,
        groupId: 3,
        status: 'co-host'
      },
      {
        userId: 2,
        groupId: 2,
        status: 'member'
      },
      {
        userId: 3,
        groupId: 2,
        status: 'pending'
      },
      {
        userId: 3,
        groupId: 4,
        status: 'co-host'
      },
      {
        userId: 4,
        groupId: 5,
        status: 'co-host'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Memberships';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3] }
    })
  }
};
