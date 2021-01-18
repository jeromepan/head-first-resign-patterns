const User = require('./User')

//Decorator
class Info extends User{
    constructor(user, address, city){
        super()
        this.user = user
        this.name = user.name
        this.address = address
        this.city = city
        this.say = () => {
            console.log(`Decorated User: ${this.name}, ${this.address}, ${this.city}`)
        }
    }
}

module.exports = Info