let id = 0;
function generateId() {
  id++;
  return id;
}

class User {
  constructor(firstName, lastName, age, reputation) {
    this.id = generateId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.reputation = reputation;
  }
}

const users = [
  new User('John', 'Doe', 20, 150),
  new User('Steve', 'Jobs', 25, 100)
]

export { users }