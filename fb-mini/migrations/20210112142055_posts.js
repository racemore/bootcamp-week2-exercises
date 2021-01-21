exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    
  table.string('msg').notNullable()

  table.integer('likes').notNullable()

  table.timestamps(true)
  })
  
  
exports.down = async knex => knex.schema.dropTableIfExists('posts')
