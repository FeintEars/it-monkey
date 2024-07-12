import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
} from "../database/post.js";

// C - Create
async function serviceCreatePost(title, body, author) {
  return databaseCreatePost(title, body, author);
}

// R - Read
async function serviceReadPost(id) {
  return databaseReadPost(id);
}

// U - Update
async function serviceUpdatePost(id, title, body) {
  const post = databaseReadPost(id);

  return databaseUpdatePost(id, title, body, post.author);
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
