import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
} from "../database/post.js";

import { databaseReadUser, User } from "../database/user.js";

import {
  NotUserError,
  PostNotFoundError,
  PostNotDeletedError,
} from "../errors.js";

// C - Create
async function serviceCreatePost(title: string, body: string, author: User) {
  if (author instanceof User) {
    const post = await databaseCreatePost(title, body, author.id);
    post.author = await databaseReadUser(author.id);
    return post;
  } else {
    throw new NotUserError();
  }
}

// R - Read
async function serviceReadPost(id: number) {
  const post = await databaseReadPost(id);
  if (post === null) {
    throw new PostNotFoundError(id);
  }
  post.author = await databaseReadUser(post.authorId);
  return post;
}

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

// D - Delete
async function serviceDeletePost(id: number) {
  const result = await databaseDeletePost(id);
  if (!result) {
    throw new PostNotDeletedError();
  }
  return result;
}

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
};
