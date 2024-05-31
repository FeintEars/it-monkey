class Animal {
  name;
  age;
  paws;

  constructor(name, age, paws) {
    this.name = name;
    this.age = age;
    this.paws = paws;
  }

  speak() {
    console.log('say something');
  }

  birthday() {
    this.age++;
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age, 4);
  }

  speak() {
    console.log(`${this.name}: Meew!`);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age, 4);
  }

  speak() {
    console.log(`${this.name}: Gaf!`);
  }
}

const cat1 = new Cat('Fluffy', 2);
cat1.speak();

const dog1 = new Dog('Bob', 3);
dog1.speak();
