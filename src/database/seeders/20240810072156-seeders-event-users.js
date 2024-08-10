'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_users', [
      {
        id: uuidv4(),
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
