import {
  databaseCreateUser,
  databaseReadUser,
  databaseUpdateUser,
  databaseDeleteUser,
} from "../database/user.js";

async function serviceCreateUser(FirstName, LastName, age) {
  return databaseCreateUser(FirstName, LastName, age);
}

async function serviceReadUser(id) {
  return databaseReadUser(id);
}

async function serviceUpdateUser(id, FirstName, LastName, age) {
  return databaseUpdateUser(id, FirstName, LastName, age);
}

async function serviceDeleteUser(id) {
  return databaseDeleteUser(id);
}

export {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
