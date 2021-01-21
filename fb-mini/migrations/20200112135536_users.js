exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('firstName').notNullable()
  table.string('lastName').notNullable()
  table.date('dob').notNullable()
  table.string('passwordIdeallyShouldBeHashed').notNullable()

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
