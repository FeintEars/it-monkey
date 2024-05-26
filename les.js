const peeson1 = {
    name: 'Jeck',
    age: 25
  }
  
  const person2 = {
    name: 'Jesika',
    age: 33
  }
  
  const auto = {
   name: 'Lanos',
   color: 'red'
  }
  
  const dog = {
   name: 'Jora',
   breed: 'Amerikan bull'
  }
   
  function sayHi(isHi) {
    console.log(`Hello, ${this.name}`);
  } 
  
  sayHi.call(dog);