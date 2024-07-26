import { databaseReadUser } from "./user.js";
import { Entity } from "./entity.js";

class Post extends Entity {
  constructor(title, body, authorId) {
    super();
    this.title = title;
    this.body = body;
    this.authorId = authorId;
  }
}

const posts = [
  new Post("Title 1", "Body 1", 1),
  new Post("Title 2", "Body 2", 1),
  new Post("Title 3", "Body 3", 2),
];
console.log(posts);

// CRUD operations

// C - Create
async function databaseCreatePost(title, body, authorId) {
  const post = new Post(title, body, authorId);
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
async function databaseUpdatePost(id, title, body, authorId) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      posts[i].title = title;
      posts[i].body = body;
      posts[i].authorId = authorId;
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
