import {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
} from "../service/user.js";

// C - Create
async function controllerCreateUser(firstName, lastName, age) {
  return serviceCreateUser(firstName, lastName, age);
}

// R - Read
async function controllerReadUser(id) {
  return serviceReadUser(id);
}

// U - Update
async function controllerUpdateUser(id, firstName, lastName, age) {
  const updateUser = serviceUpdateUser(id, firstName, lastName, age);

  if (updateUser === null) {
    console.log("User not found.");
    return null;
  }

  return updateUser;
}

// D - Delete
async function controllerDeleteUser(id) {
  return serviceDeleteUser(id);
}

export {
  controllerCreateUser,
  controllerReadUser,
  controllerUpdateUser,
  controllerDeleteUser,
};
