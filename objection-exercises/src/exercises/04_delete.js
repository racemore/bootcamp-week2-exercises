const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Delete all CATS
  Pet.query().delete().where('type', '=', 'CAT')

  const check = await Pet.query()
  console.log(check)
  // -----
  cleanup()
}

run()
