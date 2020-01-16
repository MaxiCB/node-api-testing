exports.up = function(knex) {
    return knex.schema
      .createTable("hobbits", tbl => {
          tbl.increments();
          tbl.string("name").notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("hobbits")
  };