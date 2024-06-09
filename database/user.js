
import { Entity } from './entity.js';

class User extends Entity {
  constructor (firstName, lastName, lvl) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.lvl = lvl;
  }
}

const users = [
  new User('firstName 1', 'lastName 1',10 ),
  new User('firstName 2', 'lastNamey 2', 15),
  new User('firstName 3', 'lastName 3',20 ),
];
console.log(users);

// CRUD operations

// C - Create
function databaseCreateUser(firstName, lastName, lvl) {
  const user = new User(firstName, lastName, lvl);
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
function databaseUpdateUser(id, firstName, lastName, lvl) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].firstName = firstName;
      users[i].lastName = lastName;
      users[i].lvl = lvl;
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
};