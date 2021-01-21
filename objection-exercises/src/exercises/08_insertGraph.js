const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'Bynum@gmail.com',
    pets: [
      {
        name: 'Rocco',
        type: 'DOG'
      },
      {
        name: 'Rosey',
        type: 'DOG'
      }
    ]
  })

  console.log(graph)
  // -----
  cleanup()
}

run()
