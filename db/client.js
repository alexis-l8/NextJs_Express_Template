const config = require('../knexfile.js')
const env = 'development'
console.log('environment: ', env)

const knex = require('knex')(config[env])

module.exports = knex
