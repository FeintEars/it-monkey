import {
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
} from "../database/user.js";

// C - Create
function serviceCreateUser(firstName, lastName, age) {
  return databaseCreateUser(firstName, lastName, age);
}

// R - Read
function serviceReadUser(id) {
  return databaseReadUser(id);
}

// U - Update
function serviceUpdateUser(id, firstName, lastName, age) {
  return databaseUpdateUser(id, firstName, lastName, age);
}

// D - Delete
function serviceDeleteUser(id) {
  return databaseDeleteUser(id);
}

export {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
