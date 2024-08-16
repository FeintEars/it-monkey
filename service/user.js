import {
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
} from "../database/user.js";

import { UserNotFoundError } from "../errors.js";

// C - Create
async function serviceCreateUser(firstName, lastName, age) {
  return databaseCreateUser(firstName, lastName, age);
}

// R - Read
async function serviceReadUser(id) {
  const result = await databaseReadUser(id);
  if (result === null) {
    throw new UserNotFoundError(id);
  }
  return result;
}

// U - Update
async function serviceUpdateUser(id, firstName, lastName, age) {
  return databaseUpdateUser(id, firstName, lastName, age);
}

// D - Delete
async function serviceDeleteUser(id) {
  return databaseDeleteUser(id);
}

export {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
