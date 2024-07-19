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
  post.author = await databaseReadUser(post.authorId);
  return post;
}

// R - Read
async function serviceReadPost(id) {
  const post = await databaseReadPost(id);
  post.author = await databaseReadUser(post.authorId);
  return post;
}

// U - Update
async function serviceUpdatePost(id, title, body) {
  const post = await databaseReadPost(id);
  post.author = await databaseReadUser(post.authorId);
  return databaseUpdatePost(id, title, body, post.author.id);
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
