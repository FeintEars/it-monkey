import {
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
} from "../database/user.js";

import { UserNotFoundError, UserNotDeletedErorr } from "../errors.js";

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
  const result = await databaseUpdateUser(id, firstName, lastName, age);
  if (result === null) {
    throw new UserNotFoundError(id);
  }
  return result;
}

// D - Delete
async function serviceDeleteUser(id) {
  const result = await databaseDeleteUser(id);
  if (!result) {
    throw new UserNotDeletedErorr();
  }
  return result;
}

export {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
