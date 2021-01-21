
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('requestorId')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table
      .uuid('requestedId')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table.enum('status', ['PENDING', 'ACCEPTED', 'DECLINED']).notNullable()

    table.timestamps(true)
  })
  
  
exports.down = async knex => knex.schema.dropTableIfExists('friends')