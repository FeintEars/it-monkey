import {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
} from "../service/user.js";

async function controllerCreateUser(FirstName, LastName, age) {
  return serviceCreateUser(FirstName, LastName, age);
}

async function controllerReadUser(id) {
  return serviceReadUser(id);
}

async function controllerUpdateUser(id, FirstName, LastName, age) {
  const updateUser = await serviceUpdateUser(id, FirstName, LastName, age);

  if (updateUser === null) {
    console.log("User not found.");
    return null;
  }

  return updateUser;
}

async function controllerDeleteUser(id) {
  return serviceDeleteUser(id);
}

export {
  controllerCreateUser,
  controllerReadUser,
  controllerUpdateUser,
  controllerDeleteUser,
};
