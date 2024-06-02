class animal {
 name;
 age;
 tail;

 constructor(name, age, tail) {
   this.name = name;
   this.age = age;
   this.tail = tail;
 }

 speak()  {
   console.log('say something');
 }

 birthday()  {
   this.age++;
 }
}

class Lion extends animal {
  constructor(name, age) {
    super(name, age, 1)
  } 

  speak() {
    console.log(`${this.name}: Arrr!`);
  }
}

class Pig extends animal {
  constructor(name, age) {
    super(name, age, 1)
  }

  speak() {
    console.log(`${this.name}: Hruu!`);
  }
}

const lion1 = new Lion('Leonid', 7);
lion1.speak();

const pig1 = new Pig('Borya', 5);
pig1.speak();