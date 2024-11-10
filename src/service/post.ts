import { NotUserError, PostNotFoundError } from "../errors.js";
import pool from "../db";
// C - Create
/*
async function serviceCreatePost(title: string, body: string, author: User) {
  if (author instanceof User) {
    const post = await databaseCreatePost(title, body, author.id);
    post.author = await databaseReadUser(author.id);
    return post;
  } else {
    throw new NotUserError();
  }
}*/

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
/*
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
}*/

// D - Delete
/*
async function serviceDeletePost(id: number) {
  return databaseDeletePost(id);
}*/

export {
  //serviceCreatePost,
  serviceReadPost,
  //serviceUpdatePost,
  //serviceDeletePost,
};
