import { UserNotFoundError } from "../errors.js";
import pool from "../db";

// C - Create
async function serviceCreateUser(
  firstName: string,
  lastName: string,
  age: number,
) {
  const users = await pool.query(
    'INSERT INTO "Users"("firstName","lastName", age) VALUES ($1, $2, $3) RETURNING *',
    [firstName, lastName, age],
  );
  return users.rows[0];
}

// R - Read
async function serviceReadUser(id: number) {
  const users = await pool.query('SELECT * FROM "Users" WHERE id = $1', [id]);
  if (users.rowCount === 0) {
    throw new UserNotFoundError(id);
  }
  return users.rows[0];
}

// U - Update
async function serviceUpdateUser(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
) {
  const users = await pool.query(
    'UPDATE "Users" SET "firstName" = $1, "lastName" = $2, "age" = $3 WHERE "id" = $4 RETURNING *',
    [firstName, lastName, age, id],
  );
  if (users.rowCount === 0) {
    throw new UserNotFoundError(id);
  }
  return users.rows[0];
}

// D - Delete
async function serviceDeleteUser(id: number) {
  const users = await pool.query('DELETE FROM "Users" WHERE "id" = $1', [id]);
  if (users.rowCount === 0) {
    throw new UserNotFoundError(id);
  }
  // return users.rows[0];
}

export {
  serviceCreateUser,
  serviceReadUser,
  serviceUpdateUser,
  serviceDeleteUser,
};
