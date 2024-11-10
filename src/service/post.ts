import {
  NotUserError,
  PostNotFoundError,
  PostNotDeletedError,
} from "../errors.js";
import pool from "../db";

type User = any;

// C - Create
async function serviceCreatePost(title: string, body: string, authorId: number, ) {
  const result = await pool.query ('INSERT INTO "Posts" ("title", "body", "authorId") VALUES ($1, $2, $3) RETURNING *', [title, body, authorId])

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
      p."id" = $1;`,[id],
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
    body: result.rows[0].body,
    authorId: result.rows[0].authorId,
    author: {
      id: result.rows[0].id,
      firstName: result.rows[0].firstName,
      lastName: result.rows[0].lastName,
      age: result.rows[0].age,
    },
  };
}
/*
// U - Update
async function serviceUpdatePost(id: number, title: string, body: string) {
  let post = await databaseReadPost(id);
  if (post === null) {
    throw new PostNotFoundError(id);
  }
  post = await databaseUpdatePost(id, title, body, post.authorId);
  if (post === null) {
    throw new PostNotFoundError(id);
  }
  post.author = await databaseReadUser(post.authorId);
  return post;
}
*/
/*

// D - Delete
async function serviceDeletePost(id: number) {
  const result = await databaseDeletePost(id);
  if (!result) {
    throw new PostNotDeletedError();
  }
  return result;
}
*/

export {
  serviceCreatePost,
  serviceReadPost,
  //serviceUpdatePost,
  //serviceDeletePost,
};
