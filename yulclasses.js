class Animal {
    name;
    age;
    color;

    constructor(name, age, color)
        this.name = name;
        this.color = color;
        this.age = age;

    speak() {
         console.log('say something');
          }
        
        birthday() {
            this.age++;
          }
}



class lion extends Animal{
    constructor (name, age)
        super (name, age, gold)
}

speak () {
    console.log(`${this.name}:Raf`)
}
class tiger extends Animal{
    constructor (name, age)
    super (name, age, orange)
}

speak () {
    console.log(`${this.name}:Raf`)
}

const lion1 = new Lion ('Simba', 2)
const tiger1 = new Tiger ('Sher-han', 3)