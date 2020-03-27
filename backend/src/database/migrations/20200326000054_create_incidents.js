
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (tablet) {
    tablet.increments();
    tablet.string('title').notNullable();
    tablet.string('description').notNullable();
    tablet.string('value').notNullable();

    tablet.string('ong_id').notNullable();
    
    tablet.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  
  return knex.schema.dropTable('incidents');

};
