import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
} from "../database/post.js";

import { databaseReadUser, User } from "../database/user.js";

import {
  NotUserError,
  PostNotFoundEroor,
  PostNotDeletedErorr,
} from "../errors.js";

// C - Create
async function serviceCreatePost(title, body, author) {
  if (author instanceof User) {
    const post = await databaseCreatePost(title, body, author.id);
    post.author = await databaseReadUser(author.id);
    return post;
  } else {
    throw new NotUserError();
  }
}

// R - Read
async function serviceReadPost(id) {
  const post = await databaseReadPost(id);
  if (post === null) {
    throw new PostNotFoundEroor(id);
  }
  post.author = await databaseReadUser(post.authorId);
  return post;
}

// U - Update
async function serviceUpdatePost(id, title, body) {
  let post = await databaseReadPost(id);
  post = await databaseUpdatePost(id, title, body, post.authorId);
  post.author = await databaseReadUser(post.authorId);
  return post;
}

// D - Delete
async function serviceDeletePost(id) {
  const result = await databaseDeletePost(id);
  if (!result) {
    throw new PostNotDeletedErorr();
  }
  return result;
}

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
};
