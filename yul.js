/*

var sum = 0;
var i=1;
const interval = setInterval(function(){
   if (sum < 200){
    const number = i % 2;

    if (number != 0){
        sum += i;
        console.log(i,sum);
    }
    i++;    
   }
   else{
    clearInterval(interval);
   }
},1000);

*/

const person1 = {
  name: 'Agata',
  age: 25,
  pet: 'snake'
}

const person2 = {
  name: 'Bill',
  age: 30,
  pet: 'dog'
}

const person3 = {
  name: 'Emilia',
  age: 21,
  pet: 'cat'
}

const person4 = {
  name: 'Smith',
  age: 23,
  pet: 'fish'
}

const person5 = {
  name: 'Johnson',
  age: 32,
  pet: 'bird'
}

function sayHi (isHi) {
  console.log(`Hi, ${this.name}`)
}

sayHi.call(person1);