import {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
} from "../service/user";

// C - Create
async function controllerCreateUser(
  firstName: string,
  lastName: string,
  age: number,
) {
  return serviceCreateUser(firstName, lastName, age);
}

// R - Read
async function controllerReadUser(id: number) {
  return serviceReadUser(id);
}

// U - Update
async function controllerUpdateUser(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
) {
  return serviceUpdateUser(id, firstName, lastName, age);
}

// D - Delete
async function controllerDeleteUser(id: number) {
  await serviceDeleteUser(id);
}

export {
  controllerCreateUser,
  controllerReadUser,
  controllerUpdateUser,
  controllerDeleteUser,
};
