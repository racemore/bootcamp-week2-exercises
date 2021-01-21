const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Get an instance of a user using findById(<YOUR_ID>)
  const aracely = await User.query().findById('0d7a856e-6b2a-43e5-9888-dc0dd5059f4c')
  // Use that instance to create a new pet related that user
  const test = await aracely.$relatedQuery('pets').insert({
    type: 'DOG',
    name: 'Sora',
    created_at: '2007-01-10 05:15:32+00',
    updated_at: '2019-12-20 01:02:31+00'
  })
  console.log(test)
  cleanup()
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const getMyPets = await aracely.$fetchGraph('pets')
  console.log(getMyPets)
  // -----
  cleanup()
}

run()
