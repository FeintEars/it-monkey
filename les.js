class Animal {
  name;
  age;
  color;


  constructor (name, age, color ) {
    this.name = name;
    this.age = age;
    this.color = color;

}
 
  speak () {
    console.log  (' say something')
  }

  birthday () {
    this.age ++
  }
}

class Cat extends Animal{
  constructor (name, age) {
    super( name, age, 'white' );
  }
    speak () {
    console.log (`${this.name} : Meew!`);
  }
}

class Dog extends Animal {
  constructor (name, age) {
    super(name, age, 'black' );
  } 
    speak () {
      console.log (`${this.name} : Gaf`);
    }
}



const cat1 = new Cat ('Saharok' , 5);
cat1.speak();

const dog1 = new Dog ('Bob', 8)
dog1.speak();