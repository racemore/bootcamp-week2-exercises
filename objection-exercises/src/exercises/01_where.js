const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get all users with a specific name (pick it from your database)
  const withoutWhere = await User.query()
  for(let i = withoutWhere.length-1; i >= 0; i -=1) {
    if(withoutWhere[i].firstName === 'Wayne' || withoutWhere[i].firstName === 'Audrey') {
      console.log(withoutWhere[i])
    }
  }
  // Do the same with object notation
  const selectUsers = await User.query().where('firstName', '=', 'Wayne').orWhere('firstName', '=', 'Audrey')
  console.log(selectUsers)

  // Get all DOGS and BIRDS
  const doggosAndBirbs = await Pet.query().where('type', '=', 'DOG').orWhere('type', '=', 'BIRD')
  console.log(doggosAndBirbs)

  // -----
  cleanup()
}

run()
