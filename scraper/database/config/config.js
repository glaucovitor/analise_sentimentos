const path = require('path')
require('dotenv').config({path: path.join(__dirname, '..', '..', '.env')})
module.exports = {
  development: {
    url: process.env.DATABASE_URI,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    url: process.env.DATABASE_URI,
    dialect: 'postgres',
    logging: false,

  },
  production: {
    url: process.env.DATABASE_URI,
    dialect: 'postgres',
    logging: false,

  },
}