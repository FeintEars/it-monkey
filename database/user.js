import { Entity } from "./entity.js";

class User extends Entity {
  constructor(firstName, lastName, age) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const users = [];

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
  User,
};
