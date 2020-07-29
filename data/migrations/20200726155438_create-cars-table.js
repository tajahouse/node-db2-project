
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
      tbl.increments('id'); //creates an auto-incrementing primary key. Most of our constraints would start with this line of code.
      tbl.text('make', 120)
        .notNullable();
      tbl.text('model', 120)
        .notNullable();
      tbl.text('VIN', 17)
        .notNullable()
        .unique();
      tbl.int('mileage', 6)
        .notNullable()
      tbl.text('transmission',120)
  })
}; // The change we make to our schema

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}; // Undoing changes
