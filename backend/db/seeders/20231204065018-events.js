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
        description: "A fun 6v6 fast paced game of soccer. Cleats required. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        type: "In person",
        capacity: 15,
        price: 5.00,
        startDate: "2026-02-28 8:00:00",
        endDate: "2026-03-28 12:00:00"
      },
      {
        groupId: 1,
        venueId: 2,
        name: "Speed Soccer",
        description: "A fun 6v6 fast paced game of soccer. Cleats required. Arcu cursus euismod quis viverra nibh cras pulvinar. Eget velit aliquet sagittis id consectetur purus ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Pretium nibh ipsum consequat nisl vel pretium lectus quam. In vitae turpis massa sed elementum tempus egestas sed sed. Non diam phasellus vestibulum lorem. Auctor urna nunc id cursus metus. Pretium fusce id velit ut. Auctor elit sed vulputate mi sit amet mauris commodo quis.",
        type: "In person",
        capacity: 15,
        price: 5.50,
        startDate: "2026-04-28 8:00:00",
        endDate: "2026-05-28 11:00:00"
      },
      {
        groupId: 1,
        venueId: 3,
        name: "Speed Soccer",
        description: "A fun 6v6 fast paced game of soccer. Cleats required. Arcu cursus euismod quis viverra nibh cras pulvinar. Eget velit aliquet sagittis id consectetur purus ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Pretium nibh ipsum consequat nisl vel pretium lectus quam. In vitae turpis massa sed elementum tempus egestas sed sed. Non diam phasellus vestibulum lorem. Auctor urna nunc id cursus metus. Pretium fusce id velit ut. Auctor elit sed vulputate mi sit amet mauris commodo quis.",
        type: "In person",
        capacity: 15,
        price: 5.50,
        startDate: "2024-04-28 8:00:00",
        endDate: "2024-05-28 11:00:00"
      },
      {
        groupId: 2,
        venueId: 4,
        name: "League Clash",
        description: "Join our clash team next weekend! ($5 will be refunded after the tournament ends). Enim ut sem viverra aliquet. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Ligula ullamcorper malesuada proin libero. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Nisi lacus sed viverra tellus in hac habitasse platea. Ultricies tristique nulla aliquet enim. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tellus cras adipiscing enim eu turpis egestas pretium. Cursus in hac habitasse platea dictumst quisque. Integer quis auctor elit sed. Ut pharetra sit amet aliquam id diam. Urna id volutpat lacus laoreet. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Arcu vitae elementum curabitur vitae. Purus sit amet volutpat consequat mauris nunc congue.",
        type: "Online",
        capacity: 15,
        price: 5.00,
        startDate: "2026-04-25 4:00:00",
        endDate: "2026-04-26 6:30:00"
      },
      {
        groupId: 3,
        venueId: 3,
        name: "AJR SF",
        description: "Facilisis mauris sit amet massa. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Est velit egestas dui id ornare arcu odio. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Eu feugiat pretium nibh ipsum. Pharetra sit amet aliquam id diam maecenas ultricies. Tortor at risus viverra adipiscing. Pharetra vel turpis nunc eget lorem dolor. Posuere lorem ipsum dolor sit amet consectetur. Vestibulum rhoncus est pellentesque elit ullamcorper.",
        type: "In person",
        capacity: 10,
        price: 65.50,
        startDate: "2024-04-28 18:30:00",
        endDate: "2024-04-28 21:30:00"
      },
      {
        groupId: 4,
        venueId: 3,
        name: "Pokemon Go Raids",
        description: "Come join us for gym raids. Must be able to drive or have a ride. Faucibus turpis in eu mi bibendum. Porta lorem mollis aliquam ut porttitor. Scelerisque fermentum dui faucibus in ornare quam viverra. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Adipiscing at in tellus integer. Mollis aliquam ut porttitor leo a diam sollicitudin. Quis lectus nulla at volutpat diam ut venenatis. At risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Viverra accumsan in nisl nisi scelerisque.",
        type: "In person",
        capacity: 20,
        price: 0.00,
        startDate: "2026-06-28 1:30:00",
        endDate: "2026-07-28 5:00:00"
      },
      {
        groupId: 5,
        venueId: 6,
        name: "IU HEREH World Tour",
        description: "Faucibus turpis in eu mi bibendum. Porta lorem mollis aliquam ut porttitor. Scelerisque fermentum dui faucibus in ornare quam viverra. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Adipiscing at in tellus integer. Mollis aliquam ut porttitor leo a diam sollicitudin. Quis lectus nulla at volutpat diam ut venenatis. At risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Viverra accumsan in nisl nisi scelerisque.",
        type: "In person",
        capacity: 15000,
        price: 325.70,
        startDate: "2024-07-30 19:30:00",
        endDate: "2024-07-30 22:30:00"
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
