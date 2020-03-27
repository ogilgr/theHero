
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (tablet) {
    tablet.string('id').primary();
    tablet.string('name').notNullable();
    tablet.string('email').notNullable();
    tablet.string('whatsapp').notNullable();
    tablet.string('city').notNullable();
    tablet.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
