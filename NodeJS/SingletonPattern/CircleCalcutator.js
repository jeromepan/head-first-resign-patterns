const PI = Math.PI

class Circle{
    constructor(radius){
        this.radius = radius
    }

    calcArea(){
        return this.radius * this.radius * PI
    }

    calcCirc(){
        return 2 * this.radius * PI
    }
}

module.exports = Circle