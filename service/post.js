import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
} from "../database/post.js";

import { databaseReadUser } from "../database/user.js";

// C - Create
async function serviceCreatePost(title, body, author) {
  const post = await databaseCreatePost(title, body, author.id);
  post.author = await databaseReadUser(author.id)
  return post;
}

// R - Read
async function serviceReadPost(id) {
  const post = await databaseReadPost(id);
  post.author = await databaseReadUser(post.authorId)
  return post;
}

// U - Update
async function serviceUpdatePost(id, title, body) {
  let post = await databaseReadPost(id);
  post = await databaseUpdatePost(id,title,body,post.authorId);
  post.author = await databaseReadUser(post.authorId);
  return post;
}

// D - Delete
async function serviceDeletePost(id) {
  return databaseDeletePost(id);
}

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
};
