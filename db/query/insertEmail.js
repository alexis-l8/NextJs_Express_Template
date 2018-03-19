const knex = require('../client.js')

const insertEmail = (first_name, last_name, email) => {
  return knex('mailing_list').insert({
    first_name,
    last_name,
    email
  })
}

module.exports = insertEmail
