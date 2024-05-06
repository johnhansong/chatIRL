'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Group } = require("../models")

// const { group } = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // options.tableName =  "Groups";
    await Group.bulkCreate([
      {
        organizerId: 1,
        name: "Speed Soccer",
        about: "A unique hybrid of 6v6 futsal on the field. Come and play a fast-paced, intense, exciting game of soccer",
        type: "In person",
        private: "false",
        city: "Oakland",
        state: "CA",
      },
      {
        organizerId: 2,
        name: "League of Legends",
        about: "Looking for members to join our clash group. We are a group of chill laid back individuals who spend most of our time playing aram. We welcome anyone who is level 5 honor.",
        type: "Online",
        private: "true",
        city: "Richmond",
        state: "CA",
      },
      {
        organizerId: 3,
        name: "AJR SF",
        about: "Come join us at the Chase Center in the heart of San Francisco to watch AJR perform! AJR will be visiting on April 29th at 7:30pm. Tickets start at $48. Those who have time before the concert are welcome to grab dinner with us at the San Francisco Centre in Union Square at 5pm.",
        type: "In person",
        private: "false",
        city: "San Francisco",
        state: "CA",
      },
      {
        organizerId: 2,
        name: "Pokemon Go",
        about: "Calling all trainers in the South Bay to connect for raids, missions, trades, and more fun! South Bay residents in California only.",
        type: "In person",
        private: "false",
        city: "Santa Clara",
        state: "CA",
      },
      {
        organizerId: 4,
        name: "IU Uaenas",
        about: "If you're a Uaena, come join us at the Oakland Arena in the heart of Oakland, CA to watch IU perform! IU will be visiting on April 29th at 7:30pm. Tickets start at $248.",
        type: "In person",
        private: "false",
        city: "Oakland",
        state: "CA",
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Groups";
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options,  {
      name: { [Op.in]: ["Speed Soccer",
                        "League of Legends",
                        "AJR SF",
                        "Pokemon Go",
                        "IU US Tour"
                        ]
            }
    }, {})
  }
};
