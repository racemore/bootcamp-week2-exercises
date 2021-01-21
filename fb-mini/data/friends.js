const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ requestorId, requestedId }) => ({
  id: casual.uuid,
  requestorId,
  requestedId,
  status: casual.random_element(['PENDING', 'ACCEPTED', 'DECLINED']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const friendData = []

for (let i = 0; i < 15; ++i) {
    const requestorId = casual.random_element(userData).id
    let requestedId = null
  
    do {
      requestedId = casual.random_element(userData).id
    } while (requestorId === requestedId)
  
    friendData.push(casual.friend({ requestorId, requestedId }))
}

module.exports = friendData