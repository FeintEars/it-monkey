import { Entity } from "./Entity.js";

class Post extends Entity {
  constructor(title, body, author) {
    super();
    this.title = title;
    this.body = body;
    this.author = author;
  }
}

const posts = [];

// CRUD operations

// C - Create
async function databaseCreatePost(title, body, author) {
  const post = new Post(title, body, author);
  posts.push(post);
  return post;
}

// R - Read
async function databaseReadPost(id) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return posts[i];
    }
  }

  return null;
}

// U - Update
async function databaseUpdatePost(id, title, body, author) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      posts[i].title = title;
      posts[i].body = body;
      posts[i].author = author;
      return posts[i];
    }
  }

  return null;
}

// D - Delete
async function databaseDeletePost(id) {
  let isFound = false;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      isFound = true;
    }

    if (isFound) {
      posts[i] = posts[i + 1];
    }
  }

  if (isFound) {
    posts.pop();
  }
}

export {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
};
