const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const transaction = await User.transaction(async func => {
      const jenny = await User.query(func).insert({ 
        firstName: 'Remy2', 
        lastName: 'Jonei',
        email: 'test3@gmail.com'
      }).returning('*')
      const scooby = await jenny.$relatedQuery('pets', func).insert({ 
        name: 'Scooby5',
        type: 'BIRD'
      })
      return scooby
    })
  } catch (err) {
    throw new Error("This is an error")
  }
  let counter = await Pet.query().resultSize()
  counter +=1
  console.log(counter)
  if(counter > 15) {
    const cut = await Pet.query().delete().where('type','BIRD')
    console.log(cut)
  }
  // -----
  cleanup()
}

run()
