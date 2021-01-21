const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get the first 5 users, ordered by lastName
  const check1 = await User.query().orderBy('lastName','asc').limit(5)
  console.log(check1)

  // Get the second 5 users, ordered by lastName
  const check2 = await User.query().orderBy('lastName','asc').limit(5).offset(5)
  console.log(check2)

  // -----
  cleanup()
}

run()
