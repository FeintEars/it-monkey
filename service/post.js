import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
} from "../database/post.js";

// C - Create
function serviceCreatePost(title, body, author) {
  return databaseCreatePost(title, body, author);
}

// R - Read
function serviceReadPost(id) {
  return databaseReadPost(id);
}

// U - Update
function serviceUpdatePost(id, title, body) {
  const post = databaseReadPost(id);

  return databaseUpdatePost(id, title, body, post.author);
}

// D - Delete
function serviceDeletePost(id) {
  return databaseDeletePost(id);
}

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
};
