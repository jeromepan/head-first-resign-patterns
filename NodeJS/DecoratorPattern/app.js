const User = require('./User')
const Info = require('./Info')

const user = new User("Even White")
user.say()
const userWithInfo = new Info(user, "24 Blabla Road", 'New York')
userWithInfo.say()