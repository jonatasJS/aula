exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();

    table.string('title').notNull();
    table.string('description').notNull();
    table.decimal('value').notNull();

    table.string('ong_id').notNull();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
