

// CommonJS

/*
const {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost
} = require('../database/database.js');
*/

// ESModules

import {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost
} from '../database/database.js';

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

// CommonJS

/*
module.exports = {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost
};
*/

// ESModules

export {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost
};
