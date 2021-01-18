class User{
    constructor(name){
        this.name = name
        this.say = () => {
            console.log(`User: ${this.name}`)
        }
    }
}

module.exports = User