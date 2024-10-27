import { serviceReadUser, serviceCreateUser } from "../service/user";

async function controllerCreateUser(
  firstName: string,
  lastName: string,
  age: number,
) {
  return serviceCreateUser(firstName, lastName, age);
}

async function controllerReadUser(id: number) {
  return serviceReadUser(id);
}

/*
async function controllerUpdateUser(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
) {
  const updateUser = serviceUpdateUser(id, firstName, lastName, age);

  return updateUser;
}
*/
/*
async function controllerDeleteUser(id: number) {
  return serviceDeleteUser(id);
}
*/

export { controllerReadUser, controllerCreateUser };
