const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get the total number of users
  const sumCheck = await User.query().sum('age')
  console.log(`The total number of users is ${sumCheck[0]["sum"]}`)

  // Get the average age of users
  const avgCheck = await User.query().avg('age')
  console.log(`The average age of users is ${avgCheck[0]["avg"]}`)

  // Get the total number of dogs
  const doggoCheck = await Pet.query().where('type','=','DOG').resultSize()
  console.log(`The total number of dogs is ${doggoCheck}`)

  // -----
  cleanup()
}

run()
