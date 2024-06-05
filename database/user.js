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

// CRUD operations

// C - Create
function databaseCreateUser(firstName, lastName, age, reputation) {
  const user = new User(firstName, lastName, age, reputation);
  users.push(user);
  return user;
}

// R - Read
function databaseReadUser(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }

  return null;
}

// U - Update
function databaseUpdateUser(id, firstName, lastName, age, reputation) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].firstName = firstName;
      users[i].lastName = lastName;
      users[i].age = age;
      users[i].reputation = reputation;
      return users[i];
    }
  }

  return null;
}

// D - Delete
function databaseDeleteUser(id) {
  let isFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      isFound = true;
    }

    if (isFound) {
      users[i] = users[i + 1];
    }
  }

  if (isFound) {
    users.pop();
  }
}

export { 
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
}