const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)

  // Get the name and age of all users
  const nameAndAge = await User.query().select('firstName', 'lastName', 'age')
  console.log(nameAndAge)

  // ------
  cleanup()
})

run()
