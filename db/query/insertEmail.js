const config = require("../../knexfile.js")
const knex = require("knex")(config.development)

knex("mailing_list")
  .insert({ email: "no-into@test.com" })
  .then(function() {
    knex.destroy()
  })
