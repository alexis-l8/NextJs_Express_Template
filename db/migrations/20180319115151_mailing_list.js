exports.up = function(knex, Promise) {
  return knex.schema.createTable('mailing_list', (table) => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('email').unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mailing_list')
};
