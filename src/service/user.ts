import { UserNotFoundError, UserNotDeletedError } from "../errors.js";
import pool from "../db";

 //C - Create
async function serviceCreateUser(
  firstName: string,
  lastName: string,
  age: number,
) {
  const users = await pool.query(
    'INSERT INTO "Users" ("firstName", "lastName", age) VALUES ($1, $2, $3) RETURNING *',
    [firstName, lastName, age],
  );
  return users.rows[0]
}


// R - Read
async function serviceReadUser(id: number) {
  const users = await pool.query('SELECT * FROM "Users" WHERE id = $1', [id]);
  if (users.rowCount === 0) {
    throw new UserNotFoundError(id);
  }
  return users.rows[0];
}
/*
// U - Update
async function serviceUpdateUser(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
) {
  const result = await databaseUpdateUser(id, firstName, lastName, age);
  if (result === null) {
    throw new UserNotFoundError(id);
  }
  return result;
}
*/
/*
// D - Delete
async function serviceDeleteUser(id: number) {
  const result = await databaseDeleteUser(id);
  if (!result) {
    throw new UserNotDeletedError();
  }
  return result;
}
*/

export {
  serviceCreateUser,
  serviceReadUser,
  //serviceUpdateUser,
  //serviceDeleteUser,
};
