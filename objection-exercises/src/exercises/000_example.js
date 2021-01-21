const User = require('../models/User')
const cleanup = require('../lib/cleanup')

const allUsers = async () =>  {
  try {
    const data = await User.query()
    return data
  } catch (err) {
      console.log(err)
  }
}

allUsers()