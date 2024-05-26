const person1 = {
  name: 'John',
  age: 25,
}

const person2 = {
  name: 'Bill',
  age: 30,
}

const cat = {
  name: 'Fluffy',
  color: 'black'
}

const city = {
  name: 'New York',
  population: 10000000
}

function sayHi() {
  console.log(`Hi, ${this.name}`);
}

sayHi.call(cat);
