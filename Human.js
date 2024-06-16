class Human {
  static averageMaleLife = 66
  static averageOtherLife = 71
  static averageFemaleLife = 76
   constructor (firstName, gender, age) {
    this.firstName = firstName;
    this.gender = gender;
    this.age = age;
   }

   HowMuchWillLive(){
    if (this.gender === "Male") {
       return `${Human.averageMaleLife - this.age} ${this.firstName}`
    }
    else if (this.gender === "Female") {
      return `${Human.averageFemaleLife - this.age} ${this.firstName}` 
    }
   else if (this.gender === "Other") {
      return `${Human.averageOtherLife - this.age} ${this.firstName}` 
    }
    
   else {
   return `${Human.averageOtherLife - this.age} ${this.firstName}` 
   }
  }
  }
const human1 = new Human ('Vasya', 'Male', 46)
const human2 = new Human ('Sveta', 'Female', 80)
const human3 = new Human ('Snegana', 'Other', 33)
console.log(human1.HowMuchWillLive())
console.log(human2.HowMuchWillLive())
console.log(human3.HowMuchWillLive())