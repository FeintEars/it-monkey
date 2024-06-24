class Circle {
    static pi = 3.14
    constructor (diametr) {
        this.diametr = diametr
    }
    getLength(){
        return `Length: ${Circle.pi * this.diametr}`
    }
}

const circle1 = new Circle (50) 
console.log(circle1.getLength())