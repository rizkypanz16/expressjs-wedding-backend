'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        id: '3f1c9da9-a962-4284-81da-56c4f9c8f91a',
        title: 'The Wedding Of Rizky Panji & Lenia Martiani',
        description: 'An event wedding akad & receptions',
        event_users_id: '74e65f7e-1240-4dd8-84f8-ed66aa023c9b',
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {});
  }
};
