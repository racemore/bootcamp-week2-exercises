const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get all users and their pets
  const userAndPets = await User.query().withGraphFetched('pets')
  console.dir(userAndPets, { depth: null })

  // Get all users, their pets, AND their children
  const anotherOne = await User.query().withGraphFetched('[child, pets]')

  // Get all users, their parents, and their grandparents
  const anotherOne2 = await User.query().withGraphFetched('parent.parent')
  // Get all users, their pets, their children, and their childrens' pets
  const lastOne = await User.query().withGraphFetched('[pets,child.pets]')
  
  // -----
  cleanup()
}

run()
