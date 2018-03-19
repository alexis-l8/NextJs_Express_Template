let config = './config-dev.env'
require('env2')(config)

const knexfile = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
}

module.exports = knexfile;
