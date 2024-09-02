import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
import { Entity } from "./entity.js";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

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

  /*
  @IsNotEmpty({ message: "First name is required" })
  @IsString({ message: "First name must be a string" })
  firstName: string;

  @IsNotEmpty({ message: "Last name is required" })
  @IsString({ message: "Last name must be a string" })
  lastName: string;

  @IsOptional()
  @IsNumber({}, { message: "Age must be a number" })
  age: number;
  */
}

// Middleware to validate an instance of the User class
const validateUser = async (req: any, res: any, next: any) => {
  const userInstance = plainToInstance(User, req.body); // Transform plain object to User class instance
  const errors = await validate(userInstance); // Perform validation

  if (errors.length > 0) {
    /*
    const errorMessages = errors
      .map((err) => Object.values(err.constraints))
      .join(", ");
    */
    const errorMessages = errors.map((err) => err.toString()).join(", ");
    return res.status(400).send({ error: errorMessages }); // Return validation errors
  }

  req.userInstance = userInstance; // Pass the validated instance to the next middleware
  next();
};

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
  return isFound;
}

export {
  User,
  validateUser,
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
};
