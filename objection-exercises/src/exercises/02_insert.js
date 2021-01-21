const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Insert yourself in the users table
  const myself = await User.query().insert({
    email: 'amoreno1@college.harvard.edu',
    firstName: 'Aracely',
    lastName: 'Moreno',
    age: 18,
    created_at: '2006-01-10 05:15:32+00',
    updated_at: '2018-12-20 01:02:31+00'
  })

  const check = await User.query()
  console.log(check)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const petIWishIHad = await Pet.query().insert({
    ownerId: '0d7a856e-6b2a-43e5-9888-dc0dd5059f4c',
    type: 'DOG',
    name: 'Hachi',
    created_at: '2006-01-10 05:15:32+00',
    updated_at: '2018-12-20 01:02:31+00'
  })
  const checkPet = await User.query()
  console.log(checkPet) // to see the new pet entry, check out the pets table in Postico


  // -----
  cleanup()
}

run()
