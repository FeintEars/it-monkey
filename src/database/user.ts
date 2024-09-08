import { Entity } from "./entity.js";

class User extends Entity {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const users = [
  new User("John", "Doe", 31),
  new User("Bill", "Gates", 25),
  new User("Steve", "Jobs", 56),
];

console.log(users);

// CRUD operations

// C - Create
async function databaseCreateUser(
  firstName: string,
  lastName: string,
  age: number,
) {
  const user = new User(firstName, lastName, age);
  users.push(user);
  return user;
}

// R - Read
async function databaseReadUser(id: number) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }

  return null;
}

// U - Update
async function databaseUpdateUser(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
) {
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
async function databaseDeleteUser(id: number) {
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
  User,
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
};
