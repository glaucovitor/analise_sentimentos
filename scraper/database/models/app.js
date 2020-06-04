/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app', {
    'id': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null",
      primaryKey: true
    },
    'android_version': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'developer': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'developer_id': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'genre': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'genre_id': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'count_1_star': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'count_2_star': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'count_3_star': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'count_4_star': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'count_5_star': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'min_installs': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'ratings': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'released': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'reviews': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'score': {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "null"
    },
    'size': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'title': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'updated': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'url': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'version': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    timestamps: false,
    tableName: 'apps'
  });
};
