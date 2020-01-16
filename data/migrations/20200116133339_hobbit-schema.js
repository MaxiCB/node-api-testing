exports.up = function(knex) {
  return knex.schema
    .createTable("hobbits", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("hobbit-tools", tbl => {
      tbl.increments();
      tbl.string("toolName").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("hobbits")
  .dropTableIfExists("hobbit-tools")
};
