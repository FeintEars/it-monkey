import { Entity } from "./Entity.js";

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
async function databaseCreateUser(firstName, lastName, age) {
  const user = new User(firstName, lastName, age);
  users.push(user);
  return user;
}

// R - Read
async function databaseReadUser(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }

  return null;
}

// U - Update
async function databaseUpdateUser(id, firstName, lastName, age) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].firstName = firstName;
      users[i].lastName = lastName;
      users[i].age = age;
      return users[i];
    }
  }

  return null;
}

// D - Delete
async function databaseDeleteUser(id) {
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
};
