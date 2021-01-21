const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  // Test #1: Produce the full name of a person in the users table over 30 years old
  const user = await User.query().findOne('age', '>', 20)
  const check = user.fullName
  console.log(user)

  // Test #2: Should produce the type of animal (a bird) queried from the pets table
  const pet = await Pet.query().findOne('type', 'BIRD')
  const check2 = pet.typeOfPet
  console.log(check2)

  // -----
  cleanup()
}

run()
