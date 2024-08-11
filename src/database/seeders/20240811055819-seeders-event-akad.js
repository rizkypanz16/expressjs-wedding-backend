'use strict';

/** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_akad', [
      {
        id: 'a891a1ec-f72e-4d2a-a5db-b6c93ac24c52',
        title: 'Akad Nikah',
        description: 'An event akad nikah',
        event_id: '3f1c9da9-a962-4284-81da-56c4f9c8f91a',
        event_users_id: '74e65f7e-1240-4dd8-84f8-ed66aa023c9b',
        event_date: '2025-12-14',
        event_hour: '09.00 WIB s/d Selesai',
        location: 'Savoy Homan Bandung Conference Room',
        location_maps: 'https://maps.app.goo.gl/w4iVHzsBGb1VYx9v7',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_akad', null, {});
  }
};
