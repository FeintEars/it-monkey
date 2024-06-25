import {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
} from "../service/user.js";

function controllerCreateUser(FirstName, LastName, age) {
  return serviceCreateUser(FirstName, LastName, age);
}

function controllerReadUser(id) {
  return serviceReadUser(id);
}

function controllerUpdateUser(id, FirstName, LastName, age) {
  const updateUser = serviceUpdateUser(id, FirstName, LastName, age);

  if (updateUser === null) {
    console.log("User not found.");
    return null;
  }

  return updateUser;
}

function controllerDeleteUser(id) {
  return serviceDeleteUser(id);
}

export {
  controllerCreateUser,
  controllerReadUser,
  controllerUpdateUser,
  controllerDeleteUser,
};
