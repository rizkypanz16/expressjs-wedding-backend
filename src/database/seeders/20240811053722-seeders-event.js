'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        id: uuidv4(),
        title: 'The Wedding Of Rizky Panji & Lenia Martiani',
        description: 'An event wedding akad & receptions',
        event_users_id: uuidv4(),
        event_date: '2025-12-14',
        location: 'Savoy Homan Bandung Conference Room',
        location_maps: 'https://maps.app.goo.gl/w4iVHzsBGb1VYx9v7',
        event_akad_id: null,
        event_resepsi_id: null,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
