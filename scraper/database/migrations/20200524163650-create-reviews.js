'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'null',
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'null',
      },
      user_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'null',
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: 'null',
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      reply_date: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'null',
      },
      reply_text: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'null',
      },
      version: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      thumbs_up: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      app_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reviews');
  },
};
