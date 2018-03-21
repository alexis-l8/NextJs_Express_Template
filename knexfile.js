const config = require('./config-dev.env')
require('env2')(config)

const knexfile = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    }
  }
}

module.exports = knexfile
