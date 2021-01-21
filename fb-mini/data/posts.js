const casual = require('casual')
const userData = require('./users')

casual.define('post', userId => ({
  id: casual.uuid,
  userId,
  msg: casual.sentence,
  likes: casual.integer(from = 0, to = 1000),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const postData = []

for (let i = 0; i < 10; ++i) {
  const userId = casual.random_element(userData).id 
  postData.push(casual.post(userId))
}

module.exports = postData