/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review', {
    'id': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null",
      primaryKey: true
    },
    'title': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'user_name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'score': {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "null"
    },
    'url': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'reply_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'reply_text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'version': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'thumbs_up': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'app_id': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'sentiment': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'square_term': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'text_en': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
  }, {
    timestamps: false,
    tableName: 'reviews'
  });
};
