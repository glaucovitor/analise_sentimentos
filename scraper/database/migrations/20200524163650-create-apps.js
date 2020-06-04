'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apps', {
      id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'null',
        primaryKey: true,
      },
      android_version: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'null',
      },
      developer: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      developer_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      genre: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      genre_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      count_1_star: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      count_2_star: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      count_3_star: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      count_4_star: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      count_5_star: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      min_installs: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      ratings: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      released: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      reviews: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'null',
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: 'null',
      },
      size: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'null',
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      version: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'null',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('apps');
  },
};
