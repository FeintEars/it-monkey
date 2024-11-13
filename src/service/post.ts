import { NotUserError, PostNotFoundError } from "../errors.js";
import pool from "../db";
type User = any;
// C - Create

async function serviceCreatePost(title: string, body: string, author: User) {
  const result = await pool.query(
    'INSERT INTO "Posts" ("title", "body", "authorId") VALUES ($1, $2, $3) RETURNING *',
    [title, body, author.id],
  );
  return result.rows[0];
}
// R - Read

async function serviceReadPost(id: number) {
  const result = await pool.query(
    `SELECT
      u.*,   
      p.* 
      FROM 
      "Posts" p
      LEFT JOIN 
      "Users" u ON p."authorId" = u."id"
      WHERE 
      p."id" = $1;`,
    [id],
  );
  if (result.rowCount === 0) {
    throw new PostNotFoundError(id);
  }

  if (result.rows[0].firstName === null) {
    return {
      id: result.rows[0].id,
      title: result.rows[0].title,
      body: result.rows[0].body,
      authorId: result.rows[0].authorId,
      author: {
        error: `User ${result.rows[0].authorId} not found`,
      },
    };
  }

  return {
    id: result.rows[0].id,
    title: result.rows[0].title,
    body: result.rows[0].bpdy,
    authorId: result.rows[0].authorId,
    author: {
      id: result.rows[0].id,
      firstName: result.rows[0].firstName,
      lastName: result.rows[0].lastName,
      age: result.rows[0].age,
    },
  };
}

// U - Update

async function serviceUpdatePost(id: number, title: string, body: string) {
  const posts = await pool.query(
    ` UPDATE "Posts" SET "title" = $1,"body" = $2 WHERE "id" = $3 RETURNING *`,
    [title, body, id],
  );

  if (posts.rowCount === 0) {
    throw new PostNotFoundError(id);
  }
  return posts.rows[0];
}

// D - Delete

async function serviceDeletePost(id: number) {
  const posts = await pool.query('DELETE FROM "Posts" WHERE "id" = $1', [id]);
  if (posts.rowCount === 0) {
    throw new PostNotFoundError(id);
  }
}

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
};
