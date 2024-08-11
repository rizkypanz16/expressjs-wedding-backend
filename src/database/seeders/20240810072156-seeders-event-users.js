'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_users', [
      {
        id: '74e65f7e-1240-4dd8-84f8-ed66aa023c9b',
        username: 'rizky-lenia',
        description: 'The Wedding of Rizky Panji & Lenia Martiani',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_users', null, {})
  }
};
